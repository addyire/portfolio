'use client'

import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor, Preload } from '@react-three/drei'
import { useEffect, useState, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'
import dynamic from 'next/dynamic'

const M1 = dynamic(() => import('@/components/canvas/M1').then((mod) => mod.M1), { ssr: false })
const Environment = dynamic(() => import('@/components/canvas/Environment'), { ssr: false })
const ThreeHeader = dynamic(() => import('@/components/canvas/ThreeHeader'), { ssr: false })

export const HomeScene = () => {
  const [dpr, setDPR] = useState(1.5)

  const { ref, inView } = useInView({ threshold: 0.1 })

  useEffect(() => {
    setDPR(inView ? 2 : .5)
  }, [inView])

  return <Canvas ref={ref} camera={{ position: [0, 0, 20], fov: 30 }} dpr={dpr}>
    <Suspense fallback={null}>
      <M1 />
      <Environment />
    </Suspense>
    <PerformanceMonitor
      onChange={({ factor }) => setDPR(
        inView
          ? Math.floor(.5 + 2.5 * factor, 1)
          : 0.5
      )}
    />
    <ThreeHeader />
  </Canvas>
}

export default function Scene({ ...props }) {
  return (
    <Canvas {...props}>
      {/* @ts-ignore */}
      <Preload all />
    </Canvas>
  )
}
