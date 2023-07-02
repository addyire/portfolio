import { useScroll } from "@react-three/drei"
import Image from "next/image"
import Definition from "./Definition"
import { useInView } from "react-intersection-observer"
import Header from "./Header"
import ProjectCard from "./ProjectCard"
import Button from "./Button"
import { IoLogoGithub } from "react-icons/io"

const { useFrame } = require("@react-three/fiber")
const { useRef } = require("react")

const Projects = () => {
  const { inView } = useInView()

  console.log(inView)

  return <div className="w-screen h-screen text-white">
    <div className='relative space-y-8 px-8 max-w-screen-xl mx-auto h-screen z-50' style={{ top: '350vh' }}>
      <Header>projects</Header>
      <div className="mt-8 grid grid-cols-3 px-8 gap-20 w-full py-8">
        <ProjectCard image={'/projects/dripped.png'} preview={'/projects/dripped-preview-2.png'} title={'Dripped'} description={'Dripped is a social media platform for sharing, saving, and searching for outfit inspiration. '} tech={'React Native, Express, SQL'}>
          <Button>
            <IoLogoGithub size="1.5rem" className="mr-2" />
            Github
          </Button>
        </ProjectCard>
        <div className="md:block hidden" />
        <div className="md:block hidden" />
        <ProjectCard image={'/projects/hamenu.png'} reverse preview={'/projects/hamenu-preview.png'} title={'HA Menu'} description={'Allows users to interact with their home assistant instance from the menubar of macOS.'} tech={'Electron, HTML, CSS'}>
          <Button>
            <IoLogoGithub size="1.5rem" className="mr-2" />
            Github
          </Button>
        </ProjectCard>
        <ProjectCard image={'/projects/tiktok.jpeg'} title={'CrowBank'} description={'An exam bank for AXP which features OCR, grade checks, and a chegg unlocker.'} tech={'NextJS, OCR, React Recharts'} preview={'/projects/crowbank-preview-4.png'}>
          <Button>
            <IoLogoGithub size="1.5rem" className="mr-2" />
            Github
          </Button>
        </ProjectCard>
      </div>
      <Header>experience</Header>
      <div className="w-full flex items-stretch">
        <div className="w-0.5 mx-8 bg-white" />
        <div className="grow">
          <div className="w-full h-64 bg-red-500" />
        </div>
      </div>
    </div>
  </div>
}

export default Projects
