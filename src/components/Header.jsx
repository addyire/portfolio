import { useState } from "react"
import { useInView } from "react-intersection-observer"

const Header = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <div ref={ref} className="w-fit">
      <h1 className="font-bold text-2xl">{children}</h1>
      <div className="w-[110%]">
        <div
          className={`bg-gradient-to-r from-blue-500 to-red-500 h-0.5 w-full transition-all duration-500 ${inView ? 'max-w-full' : 'max-w-0'}`}
        />
      </div>
    </div>
  )
}

export default Header
