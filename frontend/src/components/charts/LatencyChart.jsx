import {

  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,

} from "recharts"

import GlassCard from "../ui/GlassCard"

export default function LatencyChart({

  traffic,

}) {

  const chartData =
    traffic.map((item, index) => ({

      index,

      latency: item.latency_ms,

    }))

  return (

    <GlassCard
      className="
        p-6
        h-420px
        flex
        flex-col
      "
    >

      <h2
        className="
          text-2xl
          font-bold
          mb-6
        "
      >
        Realtime Latency
      </h2>

      <div className="flex-1 min-h-0">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart
            data={chartData}
            margin={{
              top: 10,
              right: 20,
              left: -10,
              bottom: 0,
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1f2937"
            />

            <XAxis
              dataKey="index"
              tick={false}
              axisLine={false}
            />

            <YAxis
              stroke="#6b7280"
              tickLine={false}
              axisLine={false}
              width={40}
            />

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                color: "white",
              }}
            />

            <Line
              type="monotone"
              dataKey="latency"
              stroke="#00ffa3"
              strokeWidth={3}
              dot={false}
              isAnimationActive={true}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </GlassCard>

  )
}