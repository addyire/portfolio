import Header from '../Header'
import ProjectCard from '../cards/ProjectCard'
import Button from '../Button'
import { IoIosGlobe, IoLogoGithub } from 'react-icons/io'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className='space-y-8'>
      <Header>projects</Header>
      <div className='mt-8 grid w-full grid-cols-6 gap-8 py-4 md:gap-16 md:px-8 md:py-12 lg:gap-24'>
        <ProjectCard
          image={'/projects/greekflow-logo.jpg'}
          preview={'/projects/greekflow-preview.png'}
          title={'GreekFlow'}
          description={'Tailormade for Fraternities and Sororities, GreekFlow consolidates all of your administrative tasks into one powerful app.'}
          tech={'Next.js, PostgreSQL, AWS'}
        >
          <Link href="https://greekflow.com">
            <Button>
              <IoIosGlobe size='1.5rem' className='mr-2' />
              website
            </Button>
          </Link>
        </ProjectCard>
        <div className='hidden md:block xl:col-span-2' />
        <div className='hidden md:block xl:col-span-2' />
        <ProjectCard
          image={'/projects/hamenu.png'}
          reverse
          preview={'/projects/hamenu-preview.png'}
          title={'HA Menu'}
          description={'Allows users to interact with their home assistant instance from the menubar of macOS.'}
          tech={'Electron, HTML, CSS'}
        >
          <Link href="https://github.com/addyire/ha-menu">
          <Button >
            <IoLogoGithub size='1.5rem' className='mr-2' />
            github
          </Button>
          </Link>
        </ProjectCard>
      </div>
    </div>
  )
}

export default Projects
