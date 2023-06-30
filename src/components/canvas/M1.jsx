'use client'

import {
  MeshReflectorMaterial,
  PerspectiveCamera,
  ScrollControls,
  useGLTF,
  useScroll,
  useTexture,
} from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { forwardRef, useRef } from 'react'
import * as THREE from 'three'

const { damp, degToRad } = THREE.MathUtils

const STARTING_SCALE = 0.3

export const M1 = ({ ...props }) => {
  const { nodes, materials } = useGLTF('/14mbp.glb')
  const backgroundTexture = useTexture('/bg.jpg')

  const mbp = useRef()
  const mbpScreen = useRef()
  const spotLight = useRef()
  const displayRef = useRef()

  return (
    <>
      <spotLight ref={spotLight} penumbra={1} position={[0, 10, 0]} intensity={0} />
      {/* <pointLight position={[0, 10, -5]} intensity={0.1} /> */}
      <group {...props} ref={mbp} position={[0, -4, 0]} scale={0.25} dispose={null}>
        <group ref={mbpScreen} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.7, -10.8]}>
          <group rotation={[0, 0, 0]} position={[0, -0.7, 10.8]}>
            <mesh geometry={nodes.apple_apple_logo_M_0.geometry} material={materials.PaletteMaterial001} />
            <group position={[0, -10.01, -11.52]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh geometry={nodes.holder_black_metal_M_0.geometry} material={materials.PaletteMaterial001} />
            </group>
            <group position={[0, 1.23, -11.52]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.01]}>
              <mesh geometry={nodes.cam_camera_M_0.geometry} material={materials.camera_M} />
              <mesh geometry={nodes.cam_green_light_M_0.geometry} material={materials.PaletteMaterial002} />
            </group>
            <mesh geometry={nodes.rubber1_rubber_0.geometry} material={materials.PaletteMaterial001} />
            <mesh ref={displayRef} geometry={nodes.screen_screen_M_0.geometry}>
              <meshStandardMaterial
                emissive={'#fff'}
                emissiveMap={backgroundTexture}
                emissiveIntensity={1}
                color="#000"
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

  // return (
  //   <>
  //     <spotLight ref={spotLight} position={[0, 5, 10]} intensity={1} />
  //     <group {...props} ref={mbp} position={[0, -2, 0]} dispose={null}>
  //       <group ref={mbpScreen} position={[0, -0.43, -11.35]} rotation={[0, 0, 0]}>
  //         <mesh geometry={nodes.back_1.geometry} material={materials.blackmatte} />
  //         <mesh receiveShadow castShadow geometry={nodes.back_2.geometry} material={materials.aluminium} />
  //       </group>
  //       <mesh
  //         geometry={nodes.body_1.geometry}
  //         material={materials.aluminium}
  //         material-color='#aaaaaf'
  //         material-envMapIntensity={0.2}
  //       />
  //       <mesh geometry={nodes.body_2.geometry} material={materials.blackmatte} />
  //     </group>
  //   </>
  // )
  // return (
  //   <>
  //     <spotLight position={[0, 5, 10]} intensity={1} />
  //     <group {...props} ref={mbp} position={[0, -2, 0]} dispose={null}>
  //       <group ref={mbpScreen} position={[0, -0.35, -11.4]}>
  //         <group position={[0, -3.5, 10.8]} rotation={[degToRad(20), 0, 0]}>
  //           {/* Screen */}
  //           <mesh geometry={nodes.abgVijaHVNRUvcc.geometry}>
  //             <meshLambertMaterial side={THREE.DoubleSide} map={backgroundTexture} toneMapped={false} />
  //           </mesh>
  //           {/* <mesh geometry={mNodes.matte.geometry}>
  //             <meshLambertMaterial map={backgroundTexture} toneMapped={false} />
  //           </mesh> */}
  //           <mesh receiveShadow geometry={nodes.CEvArJuvvmtQsgk.geometry} material={materials.PaletteMaterial002} />
  //           <mesh receiveShadow geometry={nodes.zlRXoydEgBQgFUa.geometry} material={materials.zqeFZcIteZtOShc} />
  //           <mesh receiveShadow geometry={nodes.ehiyYGFzDbgxhiD.geometry} material={materials.LJSCtLIrHNHZnIH} />
  //         </group>
  //       </group>
  //       <group>
  //         <mesh geometry={nodes.eAcvqfZlEdoxHsj.geometry} material={materials.IlNnjEDxsExlBOr} />
  //         <mesh geometry={nodes.NgmQYtxXWDmCavo.geometry} material={materials.SKOFticEGTqECbB} />
  //         <mesh geometry={nodes.KCEhahuknsxQOxv.geometry} material={materials.HpEeGHRuOqfcIZU} />
  //         <mesh geometry={nodes.QHqPxKdexBoFnAK.geometry} material={materials.PaletteMaterial005} />
  //         <mesh geometry={nodes.YJMoQnvBNpTrgeH.geometry} material={materials.PaletteMaterial002} />
  //         <mesh geometry={nodes.UxiDBlCRfXiMBzT.geometry} material={materials.zWLcvvnJhbcTEtJ} />
  //         <mesh geometry={nodes.xlRLalLTesirCGW.geometry} material={materials.hPcehRUjcLAosED} />
  //         <mesh geometry={nodes.wXiLpiodZWNDroe.geometry} material={materials.PaletteMaterial004} />
  //         <mesh geometry={nodes.NWErafhynAfYQEz.geometry} material={materials.pZbDFXVUkfRwjmQ} />
  //         <mesh geometry={nodes.QMBrsnrwfcVKELm.geometry} material={materials.VqwNZwmDotIMflD} />
  //         <mesh geometry={nodes.jvyJQHpRnZNPEYh.geometry} material={materials.LJSCtLIrHNHZnIH} />
  //         <mesh geometry={nodes.VqfccLWHjnpnmIO.geometry} material={materials.BMKLbAPYqPmfArt} />
  //       </group>
  //     </group>
  //   </>
  // )
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
