'use client'

import { PerformanceMonitor, useGLTF } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import dynamic from 'next/dynamic'

import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Navbar from '@/components/layout/Navbar'
import AboutMe from '@/components/sections/AboutMe'

const HomeScene = dynamic(() => import('@/components/canvas/Scene').then(mod => mod.HomeScene), { ssr: false })

export default function Page() {
  const [viewing, setViewing] = useState('home')

  const [homeRef] = useInView({ threshold: 0.5, onChange: (v) => v && setViewing('home') })
  const [aboutMeRef] = useInView({ threshold: 0.5, onChange: (v) => v && setViewing('aboutme') })
  const [projectsRef] = useInView({ threshold: 0.5, onChange: (v) => v && setViewing('projects') })
  const [experienceRef] = useInView({ threshold: 0.5, onChange: (v) => v && setViewing('experience') })

  return (
    <div className='w-screen'>
      <div className='relative h-[225vh] w-screen'>
        <div ref={homeRef} className="sticky top-0 w-screen h-screen">
          <HomeScene />
        </div>
      </div>
      <Navbar viewing={viewing} />
      <div className='mx-auto w-full max-w-screen-xl space-y-16 p-4'>
        <div id='aboutme' ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div id='projects' ref={projectsRef}>
          <Projects />
        </div>
        <div id='experience' ref={experienceRef}>
          <Experience />
        </div>
      </div>
    </div>
  )
}

useGLTF.preload('/14mbp.glb')
