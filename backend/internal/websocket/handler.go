package websocket

import (
	"net/http"

	"github.com/gin-gonic/gin"
	ws "github.com/gorilla/websocket"
)

var upgrader = ws.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func ServeWS(hub *Hub, c *gin.Context) {

	conn, err := upgrader.Upgrade(
		c.Writer,
		c.Request,
		nil,
	)

	if err != nil {
		return
	}

	client := &Client{
		conn: conn,
		send: make(chan []byte),
	}

	hub.register <- client

	go writePump(client)
}

func writePump(client *Client) {

	defer client.conn.Close()

	for {

		message, ok := <-client.send

		if !ok {
			return
		}

		client.conn.WriteMessage(
			ws.TextMessage,
			message,
		)
	}
}