import { create } from "zustand"

export const useTelemetryStore = create((set) => ({

  metrics: null,

  traffic: [],

  setMetrics: (metrics) =>

    set({

      metrics,

      traffic: metrics.recent_traffic || [],

    }),

}))