import { motion } from "framer-motion"

import GlassCard from "../ui/GlassCard"

export default function MetricCard({

  title,
  value,
  accent,

}) {

  return (

    <motion.div
      whileHover={{
        y: -4,
      }}
    >

      <GlassCard className="p-7">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.2em]
            text-xs
            mb-5
          "
        >
          {title}
        </p>

        <h2
          className="
            text-5xl
            font-black
            tracking-tight
          "
          style={{
            color: accent,
          }}
        >
          {value}
        </h2>

      </GlassCard>

    </motion.div>

  )
}