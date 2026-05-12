import GlassCard from "../ui/GlassCard"

export default function TrafficFeed({

  traffic,

}) {

  return (

    <GlassCard className="p-6 h-[400px] overflow-hidden">

      <h2 className="text-2xl font-bold mb-6">

        Live Traffic

      </h2>

      <div className="space-y-3 overflow-auto h-[300px] pr-2">

        {[...traffic]
          .reverse()
          .slice(0, 20)
          .map((request) => (

          <div
            key={request.id}
            className="
              flex
              items-center
              justify-between
              bg-black/20
              border
              border-white/5
              rounded-2xl
              p-4
            "
          >

            <div>

              <p className="font-semibold text-emerald-300">

                {request.method}

              </p>

              <p className="text-zinc-400 text-sm">

                {request.path}

              </p>

            </div>

            <div className="text-cyan-300 font-bold">

              {request.latency_ms.toFixed(2)}ms

            </div>

          </div>

        ))}

      </div>

    </GlassCard>

  )
}