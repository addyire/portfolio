'use client'

import { Environment, PerformanceMonitor } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Navbar from '@/components/layout/Navbar'
import AboutMe from '@/components/AboutMe'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const M1 = dynamic(() => import('@/components/canvas/M1').then((mod) => mod.M1), { ssr: false })

export default function Page() {
  const [viewing, setViewing] = useState('home')
  const [dpr, setDPR] = useState(2)

  const [homeRef, homeInView] = useInView({ threshold: 0.1, onChange: (v) => v && setViewing('home') })
  const [aboutMeRef] = useInView({ threshold: 0.5, onChange: (v) => v && setViewing('aboutme') })
  const [projectsRef] = useInView({ threshold: 0.5, onChange: (v) => v && setViewing('projects') })
  const [experienceRef] = useInView({ threshold: 0.5, onChange: (v) => v && setViewing('experience') })

  // set low dpr when not looking at home
  useEffect(() => {
    setDPR(homeInView ? 2 : 0.5)
  }, [homeInView])

  return (
    <div className="w-screen" >
      <div className="w-screen relative" style={{ height: '225vh' }} >
        <div className="sticky h-screen w-screen z-40 top-0 snap-y" ref={homeRef}>
          <Canvas
            shadows
            dpr={dpr}
            camera={{
              position: [0, 0, 20],
              fov: 30
            }}
            style={{ width: '100vw', height: '100vh' }}
          >
            <PerformanceMonitor
              onChange={({ factor }) => setDPR(homeInView ? Math.floor(2 + 2 * factor) : 0.5)}
            />
            <M1 />
            <color attach='background' args={['black']} />
            <ambientLight intensity={0.5} />
            <Environment resolution={64} files='/env.hdr' />
            <fog attach='fog' args={['black', 20, 40]} />
          </Canvas>
        </div>
      </div>
      <Navbar viewing={viewing} />
      <div className="max-w-screen-xl p-4 w-full mx-auto space-y-16">
        <div id="aboutme" ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div id="projects" ref={projectsRef}>
          <Projects />
        </div>
        <div id="experience" ref={experienceRef}>
          <Experience />
        </div>
      </div>
    </div>
  )
}
