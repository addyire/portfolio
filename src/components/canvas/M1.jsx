'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useContext, useRef } from 'react'
import * as THREE from 'three'
import { ScrollContext } from '@/helpers/context'

import useAspect from '@/helpers/hooks/useAspect'
import DisplayTexture from './DisplayTexture'

const { damp } = THREE.MathUtils

const ScaleVector = new THREE.Vector3(0, 0, 0)

export const M1 = ({ ...props }) => {
  // loading the model
  const { nodes, materials } = useGLTF('/14mbp.glb')

  // materials
  materials.PaletteMaterial001.roughness = 0.95
  materials.PaletteMaterial001.metalness = 0.95
  materials.PaletteMaterial001.envMapIntensity = 1.75

  // three stuff
  const camera = useThree((state) => state.camera)

  // refs
  const mbp = useRef()
  const mbpScreen = useRef()
  const displayRef = useRef()

  // scroll context
  const myscroll = useContext(ScrollContext)

  // get aspect ratio because drei View messes it up
  const aspectObj = useAspect()

  useFrame((_, delta) => {
    const { aspect } = aspectObj

    // scale modifier
    const aspectModifier = Math.min(0, aspect - 1.4) * 2

    const rawScroll = Math.min(1, myscroll.pageProgress ** 1.8 * 2)

    // zoom in animation
    const dampedLoadIn = damp(mbp.current?.position.z, 0, 8, delta)
    mbp.current?.position.setZ(dampedLoadIn)

    // calculate damping
    const dampedOpen = damp(mbpScreen.current.rotation.x, (rawScroll * -Math.PI) / 2, 10, delta)
    const dampedZoomIn = damp(camera.position.z, 20 - 5 * rawScroll + aspectModifier, 8, delta)
    const dampedCameraY = damp(camera.position.y, 0 + aspectModifier * rawScroll, 10, delta)
    const dampedScale = damp(mbp.current.scale.x, Math.min(0.325, 0.2 * aspect), 15, delta)

    // apply scale
    ScaleVector.set(dampedScale, dampedScale, dampedScale)
    mbp.current.scale.copy(ScaleVector)

    // apply damping
    mbpScreen.current.rotation.x = dampedOpen
    camera.position.setZ(dampedZoomIn)
    camera.position.setY(dampedCameraY)

    // hiding video when not in view
    if (displayRef.current && dampedOpen < -0.15 && myscroll.pageProgress < 2.25) displayRef.current.visible = true
    else if (displayRef.current && displayRef.current.visible) displayRef.current.visible = false
  })

  return (
    <group {...props} ref={mbp} position={[0, -2.85, -20]} scale={0.2} dispose={null}>
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
          <mesh geometry={nodes.screen_screen_M_0.geometry}>
            <DisplayTexture ref={displayRef} />
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
