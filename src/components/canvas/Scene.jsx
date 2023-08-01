'use client'

import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor, PerspectiveCamera, Preload, View as ViewImpl } from '@react-three/drei'
import { r3f } from '@/helpers/global'
import { Three } from '@/helpers/components/Three'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import ThreeHeader from './ThreeHeader'

const View = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} id='test' />
      <Three>
        <ViewImpl track={localRef}>{children}</ViewImpl>
      </Three>
    </>
  )
})

View.displayName = 'View'

export { View }

export default function Scene({ ...props }) {
  const [dpr, setDPR] = useState(1.5)

  return (
    <Canvas {...props} dpr={dpr}>
      {/* @ts-ignore */}
      <r3f.Out />
      <Preload all />
      <PerformanceMonitor onChange={({ factor }) => setDPR(1.5 + 2.5 * factor)} />
      <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={30} />
      <ThreeHeader />
    </Canvas>
  )
}
