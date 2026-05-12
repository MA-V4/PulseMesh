export const clusterNodes = [

  {
    id: "gateway",
    label: "Gateway",
    x: 50,
    y: 50,
    health: "healthy",
    load: 22,
  },

  {
    id: "auth",
    label: "Auth",
    x: 25,
    y: 20,
    health: "healthy",
    load: 48,
  },

  {
    id: "metrics",
    label: "Metrics",
    x: 78,
    y: 22,
    health: "warning",
    load: 71,
  },

  {
    id: "cache",
    label: "Redis Cache",
    x: 20,
    y: 80,
    health: "healthy",
    load: 31,
  },

  {
    id: "workers",
    label: "Workers",
    x: 82,
    y: 78,
    health: "critical",
    load: 92,
  },

]