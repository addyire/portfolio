'use client'

import { Html, ScrollControls, useGLTF, useTexture } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useContext, useRef } from 'react'
import * as THREE from 'three'
import { scrollContext } from '../dom/Layout'
import { ScrollText, ScrollTextElement } from '../animations/ScrollingText'
import TypingText from '../animations/TypingText'

const { damp } = THREE.MathUtils

export const M1 = ({ ...props }) => {
  const { nodes, materials } = useGLTF('/14mbp.glb')
  const backgroundTexture = useTexture('/bgreal.jpg')

  // three stuff
  const { aspect, height } = useThree((state) => state.viewport)
  const camera = useThree((state) => state.camera)

  // refs
  const mbp = useRef()
  const mbpScreen = useRef()
  const spotLight = useRef()
  const displayRef = useRef()
  const textRef = useRef()
  const myscroll = useContext(scrollContext)

  const scale = Math.min(0.325, 0.2 * aspect)

  const aspectModifier = Math.min(0, aspect - 1.4) * 2

  useFrame((_, delta) => {
    const rawScroll = Math.min(1, (myscroll.pageProgress ** 1.8) * 2)

    const dampedTextY = damp(textRef.current.position.y, 0 + height * rawScroll, 10, delta)
    const dampedOpen = damp(mbpScreen.current.rotation.x, (rawScroll * -Math.PI) / 2, 10, delta)
    const dampedZoomIn = damp(camera.position.z, 20 - 5 * rawScroll + aspectModifier, 8, delta)
    const dampedCameraY = damp(camera.position.y, 0 + aspectModifier * rawScroll, 10, delta)

    textRef.current.position.y = dampedTextY
    mbpScreen.current.rotation.x = dampedOpen
    camera.position.setZ(dampedZoomIn)
    camera.position.setY(dampedCameraY)
  })

  return (
    <>
      <group ref={textRef} position={[0, 0, 0]}>
        <Html
          center
          className="flex flex-col items-center justify-center w-screen text-center">
          <TypingText delay={1000} finalText={'Addy Ireland'} speed={100} />
          <ScrollText>
            <ScrollTextElement>19 years old</ScrollTextElement>
            <ScrollTextElement>penn state university</ScrollTextElement>
            <ScrollTextElement>computer science</ScrollTextElement>
            <ScrollTextElement>brother of alpha chi rho</ScrollTextElement>
          </ScrollText>
        </Html>
      </group>

      <spotLight ref={spotLight} penumbra={1} position={[0, 10, 0]} intensity={0} />
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
            <mesh ref={displayRef} geometry={nodes.screen_screen_M_0.geometry}>
              <meshStandardMaterial
                emissive={'#fff'}
                emissiveMap={backgroundTexture}
                emissiveIntensity={1}
                color='#000'
                roughness={0}
                metalness={1}
                envMapIntensity={0}
                flatShading={true}
              />
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
    </>
  )
}

export const MBPScene = () => {
  return (
    <Canvas>
      <ScrollControls pages={5}>
        <M1 />
      </ScrollControls>
    </Canvas>
  )
}
