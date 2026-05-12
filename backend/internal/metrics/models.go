package metrics

type RequestMetric struct {
	Path       string  `json:"path"`
	Method     string  `json:"method"`
	StatusCode int     `json:"status_code"`
	LatencyMs  float64 `json:"latency_ms"`
}

type MetricsSnapshot struct {
	TotalRequests int             `json:"total_requests"`
	AvgLatency    float64         `json:"avg_latency"`
	ActiveClients int             `json:"active_clients"`
	RecentTraffic []RequestMetric `json:"recent_traffic"`
}