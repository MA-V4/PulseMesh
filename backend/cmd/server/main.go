package main

import (
	"github.com/gin-gonic/gin"

	"pulsemesh/internal/metrics"
	"pulsemesh/internal/middleware"
	prommetrics "pulsemesh/internal/prometheus"
	"pulsemesh/internal/websocket"

	promhttp "github.com/prometheus/client_golang/prometheus/promhttp"
)

func main() {

	router := gin.Default()

	store := metrics.NewStore()

	hub := websocket.NewHub()

	go hub.Run()

	prommetrics.Init()

	router.Use(
		middleware.MetricsMiddleware(
			store,
			hub,
		),
	)

	router.GET("/metrics", gin.WrapH(promhttp.Handler()))

	router.GET("/ws", func(c *gin.Context) {
		websocket.ServeWS(hub, c)
	})

	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": "ok",
		})
	})

	router.Run(":8080")
}