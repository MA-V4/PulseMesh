package api

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/prometheus/client_golang/prometheus/promhttp"

	"pulsemesh/internal/metrics"
	"pulsemesh/internal/middleware"
	"pulsemesh/internal/websocket"
)

func SetupRoutes(
	hub *websocket.Hub,
	store *metrics.Store,
) *gin.Engine {

	router := gin.Default()

	router.Use(
		middleware.MetricsMiddleware(
			store,
			hub,
		),
	)

	router.GET("/ws", func(c *gin.Context) {
		websocket.ServeWS(hub, c)
	})

	router.GET("/ping", func(c *gin.Context) {

		time.Sleep(time.Millisecond * 50)

		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	router.GET(
		"/metrics",
		gin.WrapH(promhttp.Handler()),
	)

	return router
}