import { useMemo, useState } from "react"

const GradientCard = ({ children }) => {
  const [hover, setHover] = useState(false)

  const rotation = useMemo(() => Math.floor(45 + Math.random() * 90), [])

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`p-0.5 w-full h-full transition-all`}
      style={{
        background: `linear-gradient(${rotation}deg, rgba(59,130,246,1) 0%, rgba(239,68,68,1) 33.33%, rgba(59,130,246,1) 66.66%, rgba(239,68,68,1) 100%)`,
        backgroundSize: '250% 100%',
        transition: 'background-position 0.75s',
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
