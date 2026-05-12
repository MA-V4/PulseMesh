export default function GlassCard({

  children,
  className = "",

}) {

  return (

    <div
      className={`
        relative
        overflow-hidden

        bg-white/[0.03]

        border
        border-white/10

        backdrop-blur-2xl

        rounded-[28px]

        shadow-[0_0_60px_rgba(0,0,0,0.45)]

        before:absolute
        before:inset-0
        before:bg-gradient-to-br
        before:from-white/[0.08]
        before:to-transparent
        before:pointer-events-none

        ${className}
      `}
    >

      {children}

    </div>

  )
}