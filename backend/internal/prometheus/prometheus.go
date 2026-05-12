package prometheus

import (
	"strconv"

	prom "github.com/prometheus/client_golang/prometheus"
)

var (
	RequestCount = prom.NewCounterVec(
		prom.CounterOpts{
			Name: "pulsemesh_requests_total",
			Help: "Total HTTP requests processed",
		},
		[]string{"method", "path", "status"},
	)

	RequestLatency = prom.NewHistogramVec(
		prom.HistogramOpts{
			Name:    "pulsemesh_request_latency_ms",
			Help:    "HTTP request latency in milliseconds",
			Buckets: prom.DefBuckets,
		},
		[]string{"method", "path"},
	)
)

func Init() {
	prom.MustRegister(RequestCount)
	prom.MustRegister(RequestLatency)
}

func RecordRequest(
	method string,
	path string,
	status int,
	latency float64,
) {

	RequestCount.WithLabelValues(
		method,
		path,
		strconv.Itoa(status),
	).Inc()

	RequestLatency.WithLabelValues(
		method,
		path,
	).Observe(latency)
}