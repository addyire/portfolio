import { useScroll } from "@react-three/drei"
import Image from "next/image"
import Definition from "./Definition"
import { useInView } from "react-intersection-observer"
import Header from "./Header"
import ProjectCard from "./ProjectCard"
import Button from "./Button"
import { IoIosGlobe, IoLogoGithub } from "react-icons/io"

const Projects = () => {

  return <div className='space-y-8 '>
    <Header>projects</Header>
    <div className="mt-8 grid grid-cols-3 md:px-8 gap-8 md:gap-24 w-full py-4 md:py-12">
      <ProjectCard image={'/projects/dripped.png'} preview={'/projects/dripped-preview-2.png'} title={'Dripped'} description={'Dripped is a social media platform for sharing, saving, and searching for outfit inspiration. '} tech={'React Native, Express, SQL'}>
        <Button onClick={() => window.location.assign('https://dripped.app')}>
          <IoIosGlobe size="1.5rem" className="mr-2" />
          website
        </Button>
      </ProjectCard>
      <div className="md:block hidden" />
      <div className="md:block hidden" />
      <ProjectCard image={'/projects/hamenu.png'} reverse preview={'/projects/hamenu-preview.png'} title={'HA Menu'} description={'Allows users to interact with their home assistant instance from the menubar of macOS.'} tech={'Electron, HTML, CSS'}>
        <Button onClick={() => window.location.assign('https://github.com/addyire/ha-menu')}>
          <IoLogoGithub size="1.5rem" className="mr-2" />
          github
        </Button>
      </ProjectCard>
      <ProjectCard image={'/projects/exambank.jpg'} title={'Exam Bank'} description={'An exam bank which also has a grade check system and a chegg unlocker. It additionally uses OCR to scan uploaded documents for in-text search and uses Next.JS to be as fast as possible.'} tech={'NextJS, OCR, React Recharts'} preview={'/projects/exambank-preview.png'} />
    </div>
  </div>
}

export default Projects
