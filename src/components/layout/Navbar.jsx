import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { IoIosMenu, IoLogoGithub, IoLogoLinkedin } from "react-icons/io"
import FadeIn from "../animations/FadeIn"
import AnimatedHeader from "../animations/AnimatedHeader"

const NavItemText = ({ children, bright }) =>
  <a className={bright ? 'text-white' : 'text-gray-400' + ' cursor-pointer transition-all'}>{children}</a>

const Navbar = () => {
  const path = usePathname()
  const [expanded, setExpanded] = useState()
  const [hoveredPage, setHoveredPage] = useState()

  const homeRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()

  return <>
    <div
      className="md:hidden sticky top-0 w-full overflow-hidden bg-black transition-all duration-500 z-50"
      style={{
        height: expanded ? '100vh' : '4rem'
      }}
    >
      <div className="flex w-full justify-between items-center">
        <div className="flex p-4 items-center">
          <div
            className="group border border-white mr-4 p-0.5 bg-black hover:bg-white transition-all cursor-pointer"
            onClick={() => setExpanded(!expanded)}
          >
            <IoIosMenu size="1.5rem" className="group-hover:text-black transition-all" />
          </div>
          <div className="font-bold text-xl">Addy Ireland</div>
        </div>
        <div className="flex space-x-2 absolute right-0 p-4">
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
      <div className="px-4 py-0 space-y-2">
        <AnimatedHeader text={'Home'} />
        <AnimatedHeader text={'Projects'} />
        <AnimatedHeader text={'Contact'} />
      </div>
    </div>
    <div className="w-full hidden md:flex sticky justify-center items-center p-4 bg-black bg-opacity-50 backdrop-blur text-white top-0 z-50">
      <div className="font-bold text-lg absolute left-0 p-4">Addy Ireland</div>
      <div className="flex" onMouseLeave={() => setHoveredPage(undefined)}>
        <div
          onMouseEnter={() => setHoveredPage(homeRef.current)}
          ref={homeRef}
          id="home"
          className="text-gray-400 py-0.5 px-3 cursor-pointer"
          style={{ zIndex: 52 }}>
          <NavItemText bright={path === '/' || hoveredPage?.innerText === 'Home'}>Home</NavItemText>
        </div>
        <div
          onMouseEnter={() => setHoveredPage(projectsRef.current)}
          ref={projectsRef}
          className="text-gray-400 py-0.5 px-3 cursor-pointer"
          style={{ zIndex: 52 }}>
          <NavItemText bright={path === '/projects' || hoveredPage?.innerText === 'Projects'}>Projects</NavItemText>
        </div>
        <div
          onMouseEnter={() => setHoveredPage(contactRef.current)}
          ref={contactRef}
          className="text-gray-400 py-0.5 px-3 cursor-pointer"
          style={{ zIndex: 52 }}>
          <NavItemText bright={path === '/contact' || hoveredPage?.innerText === 'Contact'}>Contact</NavItemText>
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
            transitionProperty: 'all',
            transitionDuration: hoveredPage ? '250ms' : '0'
          }}
        />
      </div>
      <div className="flex space-x-2 absolute right-0 p-4">
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
  </>
}

export default Navbar
