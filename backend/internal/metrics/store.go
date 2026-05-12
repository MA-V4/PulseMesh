package metrics

import "sync"

type Store struct {
	mu      sync.Mutex
	metrics []RequestMetric
}

func NewStore() *Store {
	return &Store{
		metrics: []RequestMetric{},
	}
}

func (s *Store) Add(metric RequestMetric) {

	s.mu.Lock()
	defer s.mu.Unlock()

	s.metrics = append(s.metrics, metric)

	if len(s.metrics) > 200 {
		s.metrics = s.metrics[len(s.metrics)-200:]
	}
}

func (s *Store) Snapshot(
	activeClients int,
) MetricsSnapshot {

	s.mu.Lock()
	defer s.mu.Unlock()

	total := len(s.metrics)

	var avgLatency float64

	for _, m := range s.metrics {
		avgLatency += m.LatencyMs
	}

	if total > 0 {
		avgLatency /= float64(total)
	}

	return MetricsSnapshot{
		TotalRequests: total,
		AvgLatency:    avgLatency,
		ActiveClients: activeClients,
		RecentTraffic: s.metrics,
	}
}