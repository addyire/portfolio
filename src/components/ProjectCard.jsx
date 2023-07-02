import Image from "next/image"
import { IoLogoGithub } from 'react-icons/io'
import Button from "./Button"

const ProjectCard = ({ title, image, tech, description, children, preview, reverse = false }) => (
  <div className={`bg-gradient-to-r from-blue-500 to-red-500 col-span-3 md:col-span-2 p-0.5 mx-auto w-full`}>
    <div className="w-full bg-black grid grid-cols-3 p-4 gap-16">
      <div className={`flex flex-col col-span-3 md:col-span-2 ${reverse && 'text-end order-2'}`}>
        <div className="grow space-y-4 mb-4">
          <div className={`flex items-center ${reverse && ' text-end flex-row-reverse '}`}>
            <Image src={image} width={256} height={256} className={'object-fit w-16 h-16 rounded-md shadow'} />
            <div className="mx-4">
              <h1 className="font-bold text-xl">{title}</h1>
              <h2 className="text-sm text-gray-600">{tech}</h2>
            </div>
          </div>
          <p>{description}</p>
        </div>
        {children}
      </div>
      <div className="relative w-full h-full md:flex items-center hidden">
        <Image src={preview} width={2048} height={1024} className={`object-contain rounded-md scale-[200%] shadow absolute ${reverse ? 'right-1/2 ' : 'left-1/2'}`} />
      </div>
    </div>
  </div>
)

export default ProjectCard
