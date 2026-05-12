import { useState } from "react"
import { motion } from "framer-motion"

const PARTICLE_COUNT = 25

function createParticles() {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * 1000,
    startY: Math.random() * 700,
    endY: Math.random() * 700 - 200,
    duration: 6 + Math.random() * 8,
  }))
}

export default function FloatingParticles() {
  const [particles] = useState(createParticles)

  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
      "
    >
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            x: particle.x,
            y: particle.startY,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            y: [particle.startY, particle.endY],
          }}
          transition={{
            repeat: Infinity,
            duration: particle.duration,
            ease: "linear",
          }}
          className="
            absolute
            w-1.5
            h-1.5
            rounded-full
            bg-cyan-300/60
            shadow-[0_0_12px_rgba(0,217,255,0.8)]
          "
        />
      ))}
    </div>
  )
}