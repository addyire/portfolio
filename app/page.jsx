'use client'

import { Scroll, ScrollControls, MeshReflectorMaterial, Environment, Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { ScrollText, ScrollTextElement } from '@/components/animations/ScrollingText'
import { JetBrains_Mono } from 'next/font/google'
import TypingText from '@/components/animations/TypingText'
import Projects from '@/components/Projects'
import Button from '@/components/Button'

const jbMono = JetBrains_Mono({ subsets: ['latin'] })

const M1 = dynamic(() => import('@/components/canvas/M1').then((mod) => mod.M1), { ssr: false })

export default function Page() {
  return (
    <div className={jbMono.className + ' w-screen h-screen'}>
      <div className='fixed inset-0 w-screen h-screen z-40 flex flex-col text-white items-center mt-32 space-y-8'>
        <TypingText finalText={"Addy Ireland"} delay={1000} speed={100} />
        <div className="grid grid-cols-3 font-bold gap-8 text-gray-300">
          <div className="font-bold text-white transition-all cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">projects</div>
          <div className="font-bold text-white transition-all cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">projects</div>
          <div className="font-bold text-white transition-all cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">projects</div>
        </div>
      </div>
      <Canvas shadows dpr={[5, 5]} camera={{ position: [0, 0, 25], fov: 30 }}>
        <M1 />
        <color attach='background' args={['black']} />
        <ambientLight intensity={0.5} />
        <Environment resolution={64} files='/env.hdr' />
        <fog attach='fog' args={['black', 25, 40]} />
        {/*<gridHelper args={[50, 50, 'grey', 'grey']} position={[0, -2.95, 0.5]} />*/}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
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
  )
}
