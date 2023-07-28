import { useMemo, useState } from "react"

const GradientCard = ({ children }) => {
  const [hover, setHover] = useState(false)

  const rotation = useMemo(() => Math.floor(45 + Math.random() * 90), [])

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`p-0.5 shadow-[0_0_20px_5px_rgba(255,255,255,0.2)] w-full h-full transition-all scale-100 hover:scale-100 lg:hover:scale-105`}
      style={{
        background: `linear-gradient(${rotation}deg, rgba(59,130,246,1) 0%, rgba(239,68,68,1) 33.33%, rgba(59,130,246,1) 66.66%, rgba(239,68,68,1) 100%)`,
        backgroundSize: '250% 100%',
        transition: 'background-position 0.75s cubic-bezier(0.4, 0, 0.2, 1), transform 150ms',
        backgroundPosition: hover ? '100% 0%' : '0% 0%'
      }}
    >
      <div className="w-full h-full bg-black p-4">
        {children}
      </div>
    </div>
  )
}

export default GradientCard
