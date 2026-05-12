import { motion } from "framer-motion"

export default function AmbientBackground() {

  return (

    <div
      className="
        fixed
        inset-0
        overflow-hidden
        pointer-events-none
        z-0
      "
    >

      {/* GRID */}

      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]

          bg-size:80px_80px
        "
      />

      {/* GLOW ORB 1 */}

      <motion.div

        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}

        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}

        className="
          absolute
          top-[10%]
          left-[10%]

          w-500px
          h-500px

          rounded-full

          bg-cyan-400/10

          blur-[120px]
        "
      />

      {/* GLOW ORB 2 */}

      <motion.div

        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}

        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "easeInOut",
        }}

        className="
          absolute
          bottom-[5%]
          right-[5%]

          w-500px
          h-500px

          rounded-full

          bg-emerald-400/10

          blur-[120px]
        "
      />

    </div>

  )
}