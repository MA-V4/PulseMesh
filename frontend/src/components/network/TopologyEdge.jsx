export default function TopologyEdge({

  x1,
  y1,
  x2,
  y2,

}) {

  return (

    <svg
      className="
        absolute
        inset-0
        w-full
        h-full
        pointer-events-none
      "
    >

      <line
        x1={`${x1}%`}
        y1={`${y1}%`}
        x2={`${x2}%`}
        y2={`${y2}%`}
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="2"
      />

    </svg>

  )
}