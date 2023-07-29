'use client'

import { Html, useGLTF, useTexture, useVideoTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Suspense, forwardRef, useContext, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { scrollContext } from '../dom/Layout'
import { ScrollText, ScrollTextElement } from '../animations/ScrollingText'
import TypingText from '../animations/TypingText'
import { ScrollContext } from '@/helpers/context'

const { damp } = THREE.MathUtils

const VideoTexture = forwardRef((_, ref) => {
  const texture = useVideoTexture('/laptop-video.webm', {
    muted: true,
    loop: true,
    unsuspend: 'canplay',
    start: true,
    playsInline: true
  })

  return <meshBasicMaterial map={texture} ref={ref} toneMapped={false} />
})

const ImageTexture = () => {
  const texture = useTexture('/laptop-image.jpg')

  return <meshBasicMaterial map={texture} toneMapped={false} />
}

export const M1 = ({ ...props }) => {
  const { nodes, materials } = useGLTF('/14mbp.glb')

  // materials
  materials.PaletteMaterial001.roughness = 0.95
  materials.PaletteMaterial001.metalness = 0.95
  materials.PaletteMaterial001.envMapIntensity = 1.75

  // three stuff
  const { aspect } = useThree((state) => state.viewport)
  const camera = useThree((state) => state.camera)

  // refs
  const mbp = useRef()
  const mbpScreen = useRef()
  const displayRef = useRef()
  const myscroll = useContext(ScrollContext)

  // scaling
  const scale = Math.min(0.325, 0.2 * aspect)
  const aspectModifier = Math.min(0, aspect - 1.4) * 2

  useFrame((_, delta) => {
    const rawScroll = Math.min(1, (myscroll.pageProgress ** 1.8) * 2)

    // calculate damping
    const dampedOpen = damp(mbpScreen.current.rotation.x, (rawScroll * -Math.PI) / 2, 10, delta)
    const dampedZoomIn = damp(camera.position.z, 20 - 5 * rawScroll + aspectModifier, 8, delta)
    const dampedCameraY = damp(camera.position.y, 0 + aspectModifier * rawScroll, 10, delta)

    // hide display when not visible
    if (!!displayRef.current && (dampedOpen > -.05 || myscroll.pageProgress > 2.25))
      displayRef.current.visible = false
    else if (!!displayRef.current && !displayRef.current.visible)
      displayRef.current.visible = true

    // apply damping
    mbpScreen.current.rotation.x = dampedOpen
    camera.position.setZ(dampedZoomIn)
    camera.position.setY(dampedCameraY)
  })

  return (
    <group {...props} ref={mbp} position={[0, -2.85, 0]} scale={scale} dispose={null}>
      <group ref={mbpScreen} position={[0, 0.7, -10.8]}>
        <group rotation={[0, 0, 0]} position={[0, -0.7, 10.8]}>
          <mesh geometry={nodes.apple_apple_logo_M_0.geometry} material={materials.PaletteMaterial001} />
          <group position={[0, -10.01, -11.52]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.holder_black_metal_M_0.geometry} material={materials.PaletteMaterial001} />
          </group>
          <group position={[0, 1.23, -11.52]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.01]}>
            <mesh geometry={nodes.cam_camera_M_0.geometry} material={materials.camera_M} />
          </group>
          <mesh geometry={nodes.rubber1_rubber_0.geometry} material={materials.PaletteMaterial001} />
          <mesh geometry={nodes.screen_screen_M_0.geometry} >
            <Suspense fallback={<ImageTexture />}>
              <VideoTexture ref={displayRef} />
            </Suspense>
          </mesh>
          <mesh geometry={nodes.cap_screen_frame_0.geometry} material={materials.PaletteMaterial001} />
          <mesh geometry={nodes.cap_body_M_0.geometry} material={materials.PaletteMaterial001} />
          <mesh geometry={nodes.cap_rubber_0.geometry} material={materials.PaletteMaterial001} />
        </group>
      </group>
      <group position={[0, -0.02, 0]}>
        <mesh geometry={nodes.feet_rubber_0.geometry} material={materials.PaletteMaterial001} />
        <mesh geometry={nodes.feet_body_M_0.geometry} material={materials.PaletteMaterial001} />
        <group position={[0, 0.02, 0]}>
          <mesh geometry={nodes.bolts_body_M_0.geometry} material={materials.PaletteMaterial001} />
          <mesh geometry={nodes.bolts_holes_0.geometry} material={materials.PaletteMaterial001} />
          <mesh geometry={nodes.bolts_black_metal_M_0.geometry} material={materials.PaletteMaterial001} />
        </group>
        <group position={[0, 0.02, 0]}>
          <mesh geometry={nodes.bottom1_body_M_0.geometry} material={materials.PaletteMaterial001} />
        </group>
        <mesh geometry={nodes.body2_rubber_0.geometry} material={materials.PaletteMaterial001} />
        <mesh geometry={nodes.body2_chrome_0.geometry} material={materials.PaletteMaterial001} />
        <mesh geometry={nodes.body2_body_M_0.geometry} material={materials.PaletteMaterial001} />
        <mesh geometry={nodes.body2_black_plastic_M_0.geometry} material={materials.PaletteMaterial001} />
        <group position={[0, 0.02, 0]}>
          <mesh geometry={nodes.holes1_holes_0.geometry} material={materials.PaletteMaterial001} />
        </group>
        <mesh geometry={nodes.holes2_rubber_0.geometry} material={materials.PaletteMaterial001} />
        <group position={[0, 0.02, 0]}>
          <mesh geometry={nodes.keys_keys_M_0.geometry} material={materials.keys_M} />
        </group>
      </group>
    </group>
  )
}
