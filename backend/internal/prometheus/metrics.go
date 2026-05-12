package prometheus

import prom "github.com/prometheus/client_golang/prometheus"

var (

	TotalRequests = prom.NewCounter(
		prom.CounterOpts{
			Name: "pulsemesh_requests_total",
			Help: "Total number of requests",
		},
	)



	ActiveClients = prom.NewGauge(
		prom.GaugeOpts{
			Name: "pulsemesh_active_clients",
			Help: "Connected websocket clients",
		},
	)
)

func RegisterMetrics() {

	prom.MustRegister(TotalRequests)

	prom.MustRegister(RequestLatency)

	prom.MustRegister(ActiveClients)
}