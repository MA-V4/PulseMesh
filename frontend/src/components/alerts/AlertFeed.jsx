import {

  useEffect,
  useState,

} from "react"

import GlassCard from "../ui/GlassCard"

import AlertCard from "./AlertCard"

import {
  generateRandomAlert,
} from "../../utils/alertGenerator"

export default function AlertFeed() {

  const [alerts, setAlerts] =
    useState([])

  useEffect(() => {

    const interval = setInterval(() => {

      const newAlert =
        generateRandomAlert()

      setAlerts((prev) => [

        newAlert,
        ...prev,

      ].slice(0, 6))

    }, 4000)

    return () =>
      clearInterval(interval)

  }, [])

  return (

    <GlassCard
      className="
        p-6
        h-420px
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >

        <h2
          className="
            text-2xl
            font-black
          "
        >
          Incident Feed
        </h2>

        <div
          className="
            px-3
            py-1

            rounded-full

            bg-red-400/10
            border
            border-red-400/20

            text-red-300
            text-sm
          "
        >
          LIVE
        </div>

      </div>

      <div className="space-y-4">

        {alerts.map((alert) => (

          <AlertCard
            key={alert.id}
            alert={alert}
          />

        ))}

      </div>

    </GlassCard>

  )
}