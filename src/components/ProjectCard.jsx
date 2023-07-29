import Image from "next/image"
import { useState } from "react"

const ProjectCard = ({ title, image, tech, description, children, preview, reverse = false }) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      className={`bg-gradient-to-r shadow-[0_0_20px_5px_rgba(255,255,255,0.2)]  from-blue-500 to-red-500 col-span-6 md:col-span-5 xl:col-span-4 p-0.5 mx-auto w-full`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: `linear-gradient(90deg, rgba(59,130,246,1) 0%, rgba(239,68,68,1) 33.33%, rgba(59,130,246,1) 66.66%, rgba(239,68,68,1) 100%)`,
        backgroundSize: '250% 100%',
        transition: 'background-position 0.75s cubic-bezier(0.4, 0, 0.2, 1), transform 150ms',
        backgroundPosition: hover ? '100% 0%' : '0% 0%'
      }}
    >
      <div className="w-full bg-black grid grid-cols-3 p-4 gap-4 md:gap-16">
        <div className={`flex flex-col col-span-3 space-y-4 md:col-span-2 ${reverse && 'md:text-end md:order-2'}`}>
          <div className="grow space-y-4">
            <div className={`flex items-center ${reverse && ' md:text-end md:flex-row-reverse '}`}>
              <Image alt="Project logo" src={image} width={256} height={256} className={'object-fit w-16 h-16 rounded-md shadow'} />
              <div className="mx-4">
                <h1 className="font-bold text-xl">{title}</h1>
                <h2 className="text-sm text-gray-600">{tech}</h2>
              </div>
            </div>
            <p>{description}</p>
          </div>
          {children}
        </div>
        <div className="relative w-full col-span-3 md:col-span-1 md:h-full flex items-center justify-center">
          <Image alt="Project preview" src={preview} width={2048} height={1024} className={`h-64 md:h-auto object-contain rounded-md md:scale-[200%] lg:scale-[175%] xl:scale-[200%] shadow md:absolute ${reverse ? 'right-1/2 ' : 'left-1/2'}`} />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
