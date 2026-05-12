import {

  useState,

} from "react"

import Header from "../components/layout/Header"

import MetricCard from "../components/telemetry/MetricCard"

import LatencyChart from "../components/charts/LatencyChart"

import TrafficFeed from "../components/telemetry/TrafficFeed"

import NetworkMap from "../components/network/NetworkMap"

import AlertFeed from "../components/alerts/AlertFeed"

import BootSequence
  from "../components/landing/BootSequence"

import AmbientBackground
  from "../components/landing/AmbientBackground"

import {
  useTelemetryStore,
} from "../store/telemetryStore"

import useTelemetry from "../hooks/useTelemetry"

export default function App() {

  useTelemetry()

  const [booted, setBooted] =
    useState(false)

  const metrics =
    useTelemetryStore((s) => s.metrics)

  const traffic =
    useTelemetryStore((s) => s.traffic)

  // BOOT SEQUENCE

  if (!booted) {

    return (

      <BootSequence
        onComplete={() =>
          setBooted(true)
        }
      />

    )
  }

  // WAIT FOR WEBSOCKET

  if (!metrics) {

    return (

      <div
        className="
          h-screen
          flex
          items-center
          justify-center
          text-white
          text-4xl
          font-bold
        "
      >
        Connecting to PulseMesh...
      </div>

    )
  }

  return (

    <main
      className="
        relative
        min-h-screen
        p-10
        overflow-hidden
      "
    >

      {/* AMBIENT BACKGROUND */}

      <AmbientBackground />

      <div
        className="
          relative
          z-10
          max-w-[1600px]
          mx-auto
        "
      >

        <Header />

        {/* TOP METRICS */}

        <section
          className="
            grid
            grid-cols-3
            gap-6
            mb-6
          "
        >

          <MetricCard
            title="Total Requests"
            value={metrics.total_requests}
            accent="#00ffa3"
          />

          <MetricCard
            title="Average Latency"
            value={`${metrics.avg_latency.toFixed(2)}ms`}
            accent="#00d9ff"
          />

          <MetricCard
            title="Active Clients"
            value={metrics.active_clients}
            accent="#facc15"
          />

        </section>

        {/* TOPOLOGY */}

        <section className="mb-6">

          <NetworkMap
            traffic={traffic}
          />

        </section>

        {/* LOWER GRID */}

        <section
          className="
            grid
            grid-cols-3
            gap-6
          "
        >

          <LatencyChart
            traffic={traffic}
          />

          <TrafficFeed
            traffic={traffic}
          />

          <AlertFeed />

        </section>

      </div>

    </main>

  )
}