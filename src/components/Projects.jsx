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
    <div className='relative space-y-8 px-8 max-w-screen-xl mx-auto h-screen z-50' style={{ top: '425vh' }}>
      <Header>projects</Header>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
        <ProjectCard image={'/projects/dripped.png'} title={'Dripped'} description={'Dripped is a social media platform for sharing, saving, and searching for outfit inspiration. '} tech={'React Native, Express, SQL'}>
          <Button>
            <IoLogoGithub size="1.5rem" className="mr-2" />
            Github
          </Button>
        </ProjectCard>
        <ProjectCard image={'/projects/hamenu.png'} title={'HA Menu'} description={'HA Menu allows users to interact with their home assistant instance from the menubar of macOS and Windows.'} tech={'Electron, HTML, CSS'}>
          <Button>
            <IoLogoGithub size="1.5rem" className="mr-2" />
            Github
          </Button>
        </ProjectCard>
        <ProjectCard image={'/projects/tiktok.jpeg'} title={'TikTok Download'} description={'This verified discord bot seemlessly downloaded and compressed TikTok videos for over 100,000 users until it had to be shutdown because of TikTok rate limits.'} tech={'Discord.JS, FFMPEG'}>
          <Button>
            <IoLogoGithub size="1.5rem" className="mr-2" />
            Github
          </Button>
        </ProjectCard>
      </div>
      <Header>about me</Header>
    </div>
  </div>
}

export default Projects
