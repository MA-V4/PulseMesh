import { motion, AnimatePresence } from "framer-motion"

export default function NetworkVisualizer({ traffic }) {

  return (
    <div className="network-container">

      <div className="server-node">
        PulseMesh
      </div>

      <AnimatePresence>

        {traffic.map((request) => {

          const top =
            ((request.id % 70) + 10)

          const duration =
            Math.max(
              request.latency_ms / 100,
              1.2
            )

          const color =
            request.latency_ms < 100
              ? "#00ffa3"
              : request.latency_ms < 200
              ? "#facc15"
              : "#ef4444"

          return (

            <motion.div
              key={request.id}

              className="traffic-particle"

              initial={{
                x: 0,
                y: `${top}%`,
                opacity: 0,
                scale: 0.4,
              }}

              animate={{
                x: "70vw",
                opacity: 1,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                scale: 0,
              }}

              transition={{
                duration,
                ease: "linear",
              }}

              style={{
                background: color,
                boxShadow: `0 0 20px ${color}`,
              }}
            />

          )
        })}

      </AnimatePresence>

    </div>
  )
}