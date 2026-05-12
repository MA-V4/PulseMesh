import { motion } from "framer-motion"

export default function PacketTrail({

  x1,
  y1,
  x2,
  y2,

}) {

  return (

    <motion.div

      initial={{
        left: `${x1}%`,
        top: `${y1}%`,
        opacity: 0,
      }}

      animate={{
        left: `${x2}%`,
        top: `${y2}%`,
        opacity: [0, 1, 1, 0],
      }}

      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      }}

      className="
        absolute

        w-3
        h-3

        rounded-full

        bg-cyan-300

        shadow-[0_0_20px_rgba(0,217,255,0.9)]
      "
    />
  )
}