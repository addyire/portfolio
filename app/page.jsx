'use client'

import { Environment, Lightformer, PerformanceMonitor, Preload, Stats, useGLTF } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useInView } from 'react-intersection-observer'
import dynamic from 'next/dynamic'

import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Navbar from '@/components/layout/Navbar'
import AboutMe from '@/components/AboutMe'

const ThreeHeader = dynamic(() => import('@/components/canvas/ThreeHeader').then(mod => mod.default), { ssr: false })
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
            dpr={dpr}
            camera={{
              position: [0, 0, 20],
              fov: 30
            }}
            style={{ width: '100vw', height: '100vh' }}
          >
            <PerformanceMonitor
              onChange={({ factor }) =>
                setDPR(homeInView ? Math.floor(2 + 2 * factor) : 0.5)}
            />
            <Preload all />
            <ThreeHeader />
            <Stats showPanel={0} />
            <Suspense fallback={null}>
              <M1 />
            </Suspense>
            <Environment frames={1} resolution={256} blur={1}>
              <Lightformer form="rect" intensity={.4} color="#d2defc" scale={[10, 10]} position={[0, 5, 0]} target={[0, 0, 0]} />
              <Lightformer form="rect" intensity={.05} color="#dce5fc" scale={[10, 10]} position={[0, -10, 0]} target={[0, 0, 0]} />
              <Lightformer form="rect" intensity={.2} color="#dce5fc" scale={[10, 10, 10]} position={[-10, 0, 0]} target={[0, 0, 0]} />
              <Lightformer form="rect" intensity={.2} color="#f5f8ff" scale={[10, 10, 10]} position={[10, 0, 0]} target={[0, 0, 0]} />
              <Lightformer form="rect" intensity={0.15} color="#e3eafa" scale={[10, 15, 1]} position={[0, 0, 15]} target={[0, 0, 0]} />
            </Environment>
            <color attach='background' args={['black']} />
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

useGLTF.preload('/14mbp.glb')
