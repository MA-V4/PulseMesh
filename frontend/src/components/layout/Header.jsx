import { Activity } from "lucide-react"

export default function Header() {

  return (

    <header
      className="
        flex
        flex-col
        lg:flex-row

        items-start
        lg:items-center

        justify-between

        gap-6

        mb-10
      "
    >

      <div>

        <div
          className="
            flex
            items-center
            gap-4
            mb-3
          "
        >

          <div
            className="
              w-14
              h-14

              rounded-2xl

              bg-cyan-400/10

              border
              border-cyan-400/20

              flex
              items-center
              justify-center

              shadow-[0_0_40px_rgba(0,217,255,0.35)]
            "
          >
            <Activity
              className="text-cyan-300"
            />
          </div>

          <div>

            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl

                font-black
                tracking-tight

                bg-gradient-to-r
                from-cyan-300
                to-emerald-300

                bg-clip-text
                text-transparent
              "
            >
              PulseMesh
            </h1>

            <p
              className="
                text-zinc-400
                mt-1

                text-sm
                sm:text-base
              "
            >
              Distributed observability platform
            </p>

          </div>

        </div>

      </div>

      <div
        className="
          px-5
          py-3

          rounded-full

          border
          border-emerald-400/20

          bg-emerald-400/10

          text-emerald-300

          font-semibold

          shadow-[0_0_30px_rgba(0,255,163,0.2)]
        "
      >
        LIVE SYSTEM
      </div>

    </header>

  )
}