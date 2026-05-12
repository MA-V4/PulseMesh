# PulseMesh

Distributed observability platform built with Go, WebSockets, React, and realtime telemetry streaming.

![PulseMesh Dashboard](./screenshots/dashboard.png)

---

# Overview

PulseMesh is a realtime infrastructure visualization platform designed to simulate distributed systems telemetry, node orchestration, live traffic analysis, and incident monitoring.

The platform streams telemetry data from a Go backend over WebSockets into a cinematic React frontend featuring:

- distributed cluster topology
- realtime latency graphs
- packet routing visualization
- live incident feeds
- node health simulation
- animated observability UI

This project was built to explore:
- distributed systems concepts
- realtime streaming architectures
- websocket infrastructure
- observability tooling
- production-grade frontend systems

---

# Features

## Realtime Telemetry Streaming

- WebSocket-powered live metrics
- request throughput tracking
- latency aggregation
- active client monitoring

## Distributed Cluster Visualization

- animated network topology
- packet routing trails
- dynamic node health
- cluster mutation simulation

## Incident Monitoring

- realtime alerts
- latency spike warnings
- degraded node detection
- operational event feed

## Advanced UI Systems

- cinematic boot sequence
- ambient animated background
- glassmorphism interface
- responsive dashboard layouts
- motion-driven interactions

---

# Architecture

```text
                ┌──────────────────┐
                │   Go Backend     │
                │ Gin + WebSocket  │
                └────────┬─────────┘
                         │
              Realtime Telemetry Stream
                         │
          ┌──────────────┴──────────────┐
          │                             │
  ┌───────▼────────┐           ┌────────▼────────┐
  │ Metrics Engine │           │  WebSocket Hub  │
  └───────┬────────┘           └────────┬────────┘
          │                             │
          └──────────────┬──────────────┘
                         │
                 React Frontend
                         │
        ┌────────────────────────────────┐
        │  Topology + Charts + Alerts    │
        └────────────────────────────────┘
```

---

# Tech Stack

## Backend

- Go
- Gin
- Gorilla WebSocket

## Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- Recharts
- Zustand

---

# Running Locally

## Backend

```bash
cd backend
go run cmd/server/main.go
```

Runs on:

```text
localhost:8080
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```text
localhost:5173
```

---

# Simulating Traffic

PowerShell:

```powershell
1..500 | % { Invoke-WebRequest http://localhost:8080/ping }
```

This generates:
- live latency updates
- traffic feed activity
- alert spikes
- topology state mutation

---

# Screenshots

## Cluster Topology

![Topology](./screenshots/topology.png)

## Incident Feed

![Alerts](./screenshots/alerts.png)

---

# Future Improvements

- Prometheus integration
- Docker orchestration
- Kubernetes simulation
- persistent metrics storage
- authentication
- multi-region clustering
- tracing system

---

# Author

Mihran Ali
