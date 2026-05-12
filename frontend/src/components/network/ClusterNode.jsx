import { motion } from "framer-motion"

const healthStyles = {

  healthy: {
    glow: "rgba(0,255,163,0.45)",
    border: "border-emerald-400/40",
    bg: "bg-emerald-400/10",
    text: "text-emerald-300",
  },

  warning: {
    glow: "rgba(250,204,21,0.45)",
    border: "border-yellow-400/40",
    bg: "bg-yellow-400/10",
    text: "text-yellow-300",
  },

  critical: {
    glow: "rgba(239,68,68,0.45)",
    border: "border-red-400/40",
    bg: "bg-red-400/10",
    text: "text-red-300",
  },

}

export default function ClusterNode({

  node,
  onHover,

}) {

  const style =
    healthStyles[node.health]

  return (

    <motion.div

      onMouseEnter={() =>
        onHover(node)
      }

      whileHover={{
        scale: 1.08,
      }}

      animate={{
        scale: [1, 1.04, 1],
      }}

      transition={{
        repeat: Infinity,
        duration: 3,
      }}

      className="
        absolute
        -translate-x-1/2
        -translate-y-1/2
        cursor-pointer
      "

      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
      }}
    >

      <div
        className={`
          w-28
          h-28

          lg:w-32
          lg:h-32

          rounded-full

          border
          ${style.border}

          ${style.bg}

          backdrop-blur-xl

          flex
          flex-col
          items-center
          justify-center

          shadow-[0_0_50px_var(--glow)]

          transition-all
        `}
        style={{
          "--glow": style.glow,
        }}
      >

        <h3
          className={`
            font-bold
            text-sm
            lg:text-lg

            ${style.text}
          `}
        >
          {node.label}
        </h3>

        <p className="text-zinc-400 text-xs lg:text-sm mt-1">

          {node.load}% load

        </p>

      </div>

    </motion.div>

  )
}