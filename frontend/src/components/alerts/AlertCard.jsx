import { motion } from "framer-motion"

const styles = {

  healthy: {
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/10",
    text: "text-emerald-300",
  },

  warning: {
    border: "border-yellow-400/20",
    bg: "bg-yellow-400/10",
    text: "text-yellow-300",
  },

  critical: {
    border: "border-red-400/20",
    bg: "bg-red-400/10",
    text: "text-red-300",
  },

}

export default function AlertCard({

  alert,

}) {

  const style =
    styles[alert.severity]

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      exit={{
        opacity: 0,
      }}

      className={`
        p-5
        rounded-2xl

        border
        ${style.border}

        ${style.bg}

        backdrop-blur-xl
      `}
    >

      <div
        className="
          flex
          items-start
          justify-between
          mb-2
        "
      >

        <h3
          className={`
            font-bold
            ${style.text}
          `}
        >
          {alert.title}
        </h3>

        <span className="text-zinc-500 text-sm">

          {alert.timestamp}

        </span>

      </div>

      <p className="text-zinc-300 text-sm">

        {alert.description}

      </p>

    </motion.div>

  )
}