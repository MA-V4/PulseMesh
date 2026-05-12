export default function NodeInspector({

  node,

}) {

  if (!node) return null

  return (

    <div
      className="
        absolute
        bottom-6
        right-6

        w-[320px]

        p-5

        rounded-3xl

        border
        border-white/10

        bg-black/40

        backdrop-blur-2xl

        shadow-[0_0_50px_rgba(0,0,0,0.5)]

        z-50
      "
    >

      <h3
        className="
          text-2xl
          font-black
          mb-4
        "
      >
        {node.label}
      </h3>

      <div className="space-y-3">

        <div className="flex justify-between">

          <span className="text-zinc-400">
            Status
          </span>

          <span className="text-cyan-300">

            {node.health}

          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-zinc-400">
            Load
          </span>

          <span className="text-emerald-300">

            {node.load}%

          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-zinc-400">
            Region
          </span>

          <span className="text-zinc-200">

            eu-west-2

          </span>

        </div>

      </div>

    </div>

  )
}