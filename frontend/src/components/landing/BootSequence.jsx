import {

  useEffect,
  useState,

} from "react"

import { motion, AnimatePresence }
  from "framer-motion"

const bootMessages = [

  "Initializing telemetry core...",
  "Connecting distributed nodes...",
  "Streaming realtime metrics...",
  "Loading observability engine...",
  "Establishing websocket channels...",
  "Cluster synchronization complete.",

]

export default function BootSequence({

  onComplete,

}) {

  const [visible, setVisible] =
    useState(true)

  const [index, setIndex] =
    useState(0)

  useEffect(() => {

    if (
      index <
      bootMessages.length - 1
    ) {

      const timer =
        setTimeout(() => {

          setIndex(index + 1)

        }, 700)

      return () =>
        clearTimeout(timer)

    }

    else {

      const done =
        setTimeout(() => {

          setVisible(false)

          onComplete()

        }, 1200)

      return () =>
        clearTimeout(done)
    }

  }, [index])

  return (

    <AnimatePresence>

      {visible && (

        <motion.div

          initial={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
          }}

          className="
            fixed
            inset-0
            z-50

            bg-[#050816]

            flex
            items-center
            justify-center
          "
        >

          <div className="w-700px">

            <h1
              className="
                text-7xl
                font-black
                mb-10

                bg-gradient-to-r
                from-cyan-300
                to-emerald-300

                bg-clip-text
                text-transparent
              "
            >
              PulseMesh
            </h1>

            <div
              className="
                border
                border-white/10

                bg-black/30

                rounded-3xl

                p-8

                backdrop-blur-xl
              "
            >

              <div className="space-y-4">

                {bootMessages
                  .slice(0, index + 1)
                  .map((msg, i) => (

                  <motion.p

                    key={i}

                    initial={{
                      opacity: 0,
                      x: -10,
                    }}

                    animate={{
                      opacity: 1,
                      x: 0,
                    }}

                    className="
                      text-zinc-300
                      font-mono
                    "
                  >
                    {">"} {msg}
                  </motion.p>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  )
}