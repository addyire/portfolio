import Image from "next/image"
import { IoLogoGithub } from 'react-icons/io'
import Button from "./Button"

const ProjectCard = ({ title, image, tech, description, children }) => (
  <div className="bg-gradient-to-r from-blue-500 to-red-500 p-0.5 w-full h-full">
    <div className="w-full h-full bg-black flex flex-col p-4">
      <div className="grow space-y-4 mb-4">
        <div className="flex items-center">
          <Image src={image} width={256} height={256} className={'object-fit w-16 h-16 rounded-md shadow'} />
          <div className="ml-4">
            <h1 className="font-bold text-xl">{title}</h1>
            <h2 className="text-sm text-gray-600">{tech}</h2>
          </div>
        </div>
        <p>{description}</p>
      </div>
      {children}
    </div>
  </div>
)

export default ProjectCard
