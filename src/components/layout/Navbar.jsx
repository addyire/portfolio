'use client'

import { useContext, useRef, useState } from "react"
import { IoIosMenu, IoLogoGithub, IoLogoLinkedin } from "react-icons/io"
import AnimatedHeader from "../animations/AnimatedHeader"
import { useRouter } from "next/navigation"
import { scrollContext } from "../dom/Layout"

const NavItemText = ({ children, bright }) =>
  <a key={children} className={bright ? 'text-white' : 'text-gray-400' + ' cursor-pointer duration-200 transition-all'}>{children}</a>

const Navbar = ({ viewing }) => {
  const router = useRouter()
  const [expanded, setExpanded] = useState()
  const [hoveredPage, setHoveredPage] = useState()

  const { scroll } = useContext(scrollContext)

  const navRef = useRef()
  const homeRef = useRef()
  const aboutMeRef = useRef()
  const projectsRef = useRef()
  const experienceRef = useRef()

  const toggleExpanded = () => {
    if (!expanded) scroll(navRef.current.offsetTop)

    setExpanded(!expanded)
  }

  const mobileNavTo = (section) => {
    setExpanded(false)

    setTimeout(() => navTo(section), 500)
  }

  const navTo = (section) => {
    const el = document.getElementById(section)
    if (!el) return

    scroll(el.offsetTop - 64)
  }

  return <div
    ref={navRef}
    className="w-full sticky bg-black overflow-hidden bg-opacity-80 backdrop-blur text-white top-0 z-50 transition-all duration-300 md:!mb-0 max-h-screen md:max-h-[62px]"
    style={{
      height: expanded ? '100vh' : '62px',
      marginBottom: expanded ? 'calc(62px - 100vh)' : '0',
    }}
  >
    <div className="flex justify-center items-center p-4 w-full">
      <div className="flex mr-auto items-center justify-center">
        <div className="md:max-w-0 max-w-[3rem] transition-all overflow-hidden duration-200 delay-200">
          <div
            className="group border border-white mr-4 overflow-hidden p-0.5 bg-black hover:bg-white transition-all cursor-pointer"
            onClick={() => toggleExpanded()}
          >
            <IoIosMenu size="1.5rem" className="group-hover:text-black transition-all" />
          </div>
        </div>
        <div className="font-bold text-lg">
          Addy Ireland
        </div>
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 flex justify-center opacity-0 h-7 overflow-hidden md:opacity-100 transition-opacity duration-200"
        onMouseLeave={() => setHoveredPage(undefined)}
      >
        <div
          onMouseEnter={() => setHoveredPage(homeRef.current)}
          ref={homeRef}
          id="home"
          className="text-gray-400 py-0.5 px-3 md:cursor-pointer pointer-events-none md:pointer-events-auto whitespace-nowrap"
          onClick={() => router.push('/')}
          style={{ zIndex: 52 }}>
          <NavItemText
            bright={viewing === 'home' || hoveredPage?.innerText === 'Home'}
          >
            Home
          </NavItemText>
        </div>
        <div
          onMouseEnter={() => setHoveredPage(aboutMeRef.current)}
          ref={aboutMeRef}
          className="text-gray-400 py-0.5 px-3 md:cursor-pointer pointer-events-none md:pointer-events-auto whitespace-nowrap"
          onClick={() => navTo('aboutme')}
          style={{ zIndex: 52 }}>
          <NavItemText
            bright={viewing === 'aboutme' || hoveredPage?.innerText === 'About Me'}
          >
            About Me
          </NavItemText>
        </div>
        <div
          onMouseEnter={() => setHoveredPage(projectsRef.current)}
          ref={projectsRef}
          className="text-gray-400 py-0.5 px-3 md:cursor-pointer pointer-events-none md:pointer-events-auto whitespace-nowrap"
          onClick={() => navTo('projects')}
          style={{ zIndex: 52 }}>
          <NavItemText
            bright={viewing === 'projects' || hoveredPage?.innerText === 'Projects'}
          >
            Projects
          </NavItemText>
        </div>
        <div
          onMouseEnter={() => setHoveredPage(experienceRef.current)}
          ref={experienceRef}
          className="text-gray-400 py-0.5 px-3 md:cursor-pointer pointer-events-none md:pointer-events-auto whitespace-nowrap"
          onClick={() => navTo('experience')}
          style={{ zIndex: 52 }}>
          <NavItemText
            bright={viewing === 'experience' || hoveredPage?.innerText === 'Experience'}
          >
            Experience
          </NavItemText>
        </div>
        <div
          className="absolute rounded-md"
          style={{
            zIndex: 51,
            backgroundColor: 'rgba(255,255,255,.2)',
            left: hoveredPage?.offsetLeft,
            width: hoveredPage?.offsetWidth,
            height: hoveredPage?.clientHeight,
            opacity: hoveredPage ? 1 : 0,
            transition: `opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), left ${hoveredPage ? '250ms' : '0'} cubic-bezier(0.4, 0, 0.2, 1), width 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
          }}
        />
      </div>
      <div className="flex space-x-2 ml-auto">
        <IoLogoLinkedin
          className="text-gray-400 hover:text-white transition-all cursor-pointer"
          size={'1.5rem'}
          onClick={() => window.location.assign('https://www.linkedin.com/in/addisonireland')}
        />
        <IoLogoGithub
          className="text-gray-400 hover:text-white transition-all cursor-pointer"
          size={'1.5rem'}
          onClick={() => window.location.assign('https://github.com/addyire/')}
        />
      </div>
    </div>
    <div className="p-4 py-0 space-y-4">
      <AnimatedHeader onClick={() => mobileNavTo('home')} text={'Home'} />
      <AnimatedHeader onClick={() => mobileNavTo('aboutme')} text={'About Me'} />
      <AnimatedHeader onClick={() => mobileNavTo('projects')} text={'Projects'} />
      <AnimatedHeader onClick={() => mobileNavTo('experience')} text={'Experience'} />
    </div>
  </div>
}

export default Navbar
