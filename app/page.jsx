'use client'

import { Scroll, ScrollControls, MeshReflectorMaterial, Environment, Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { ScrollText, ScrollTextElement } from '@/components/animations/ScrollingText'
import { JetBrains_Mono } from 'next/font/google'
import TypingText from '@/components/animations/TypingText'
import Projects from '@/components/Projects'
import { useInView } from 'react-intersection-observer'

const jbMono = JetBrains_Mono({ subsets: ['latin'] })

const M1 = dynamic(() => import('@/components/canvas/M1').then((mod) => mod.M1), { ssr: false })

export default function Page() {
  const { ref: modelPage1, inView, entry } = useInView({
    threshold: 0.5
  })
  console.log(inView)

  return (
    <div className="w-screen" style={{ height: '400vh' }}>
      <div className="w-screen bg-red-500 relative" style={{ height: '200vh' }}>
        <div className="absolute h-screen w-1 bg-white z-10" ref={modelPage1}></div>
        <div className="sticky h-screen w-screen top-0 bg-blue-500">
          <Canvas shadows dpr={[5, 5]} camera={{ position: [0, 0, 20], fov: 30 }}>
            <M1 page={inView ? 2 : 1} />
            <color attach='background' args={['black']} />
            <ambientLight intensity={0.5} />
            <Environment resolution={64} files='/env.hdr' />
            <fog attach='fog' args={['black', 20, 40]} />
            {/*<gridHelper args={[50, 50, 'grey', 'grey']} position={[0, -2.95, 0.5]} />*/}
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
              <planeGeometry args={[50, 50]} />
              <MeshReflectorMaterial
                blur={[100, 100]}
                mixBlur={0.8}
                mixStrength={10}
                mirror={0.8}
                resolution={512}
                depthScale={1}
                minDepthThreshold={0.2}
                maxDepthThreshold={5}
                color={'#333'}
              />
            </mesh>
          </Canvas>
        </div>
      </div>
    </div>
  )

  return (
    <div className={jbMono.className + ' w-screen h-screen'}>
      <Canvas shadows dpr={[5, 5]} camera={{ position: [0, 0, 20], fov: 30 }}>
        <ScrollControls pages={8} damping={0.1}>
          <Scroll html>
            <div className='absolute flex h-screen w-screen flex-col items-center justify-center '>
              <div className={jbMono.className + ' text-white'}>
                <TypingText delay={1000} finalText={"Addy Ireland"} speed={100} />
              </div>
              <ScrollText>
                <ScrollTextElement>19 YEARS OLD</ScrollTextElement>
                <ScrollTextElement>PENN STATE UNIVERSITY</ScrollTextElement>
                <ScrollTextElement>COMPUTER SCIENCE</ScrollTextElement>
                <ScrollTextElement>BROTHER OF ALPHA CHI RHO</ScrollTextElement>
              </ScrollText>
            </div>
            <Projects />
          </Scroll>
          <M1 />
          <color attach='background' args={['black']} />
          <ambientLight intensity={0.5} />
          <Environment resolution={64} files='/env.hdr' />
          <fog attach='fog' args={['black', 20, 40]} />
          {/*<gridHelper args={[50, 50, 'grey', 'grey']} position={[0, -2.95, 0.5]} />*/}
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[100, 100]}
              mixBlur={0.8}
              mixStrength={10}
              mirror={0.8}
              resolution={512}
              depthScale={1}
              minDepthThreshold={0.2}
              maxDepthThreshold={5}
              color={'#333'}
            />
          </mesh>
        </ScrollControls>
      </Canvas>
    </div>
  )
}
