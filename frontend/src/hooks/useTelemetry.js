import { useEffect } from "react"

import {
  useTelemetryStore,
} from "../store/telemetryStore"

export default function useTelemetry() {

  const setMetrics =
    useTelemetryStore((s) => s.setMetrics)

  useEffect(() => {

    const socket = new WebSocket(
      "wss://pulsemesh-backend.onrender.com/ws"
    )

    socket.onmessage = (event) => {

      const payload = JSON.parse(
        event.data
      )

      setMetrics(payload)
    }

    socket.onerror = (err) => {
      console.error(err)
    }

    socket.onclose = () => {
      console.log(
        "Telemetry disconnected"
      )
    }

    return () => socket.close()

  }, )
}