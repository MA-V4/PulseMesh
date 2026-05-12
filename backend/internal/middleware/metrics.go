package middleware

import (
	"encoding/json"
	"time"

	"github.com/gin-gonic/gin"

	"pulsemesh/internal/metrics"
	"pulsemesh/internal/websocket"
)

func MetricsMiddleware(
	store *metrics.Store,
	hub *websocket.Hub,
) gin.HandlerFunc {

	return func(c *gin.Context) {

		start := time.Now()

		c.Next()

		latency :=
			float64(
				time.Since(start).Microseconds(),
			) / 1000

		metric := metrics.RequestMetric{
			Path:       c.Request.URL.Path,
			Method:     c.Request.Method,
			StatusCode: c.Writer.Status(),
			LatencyMs:  latency,
		}

		store.Add(metric)

		snapshot := store.Snapshot(
			hub.ClientCount(),
		)

		data, _ := json.Marshal(snapshot)

		hub.Broadcast(data)
	}
}
