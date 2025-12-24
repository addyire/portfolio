'use client'

import { useContext, useRef } from 'react'
import * as THREE from 'three'
import { ScrollText, ScrollTextElement } from '../animations/ScrollingText'
import { useFrame, useThree } from '@react-three/fiber'
import TypingText from '../animations/TypingText'
import { ScrollContext } from '@/helpers/context'
import { Html } from '@react-three/drei'
import { differenceInYears } from 'date-fns'

const { damp } = THREE.MathUtils

const birthday = new Date(1072684800000) // 12/29/2003


const ThreeHeader = () => {
  const scroll = useContext(ScrollContext)
  const { height } = useThree((state) => state.viewport)

  const textRef = useRef()

  useFrame((_, delta) => {
    const rawScroll = Math.min(1, scroll.pageProgress ** 1.8 * 2)
    const dampedTextY = damp(textRef.current.position.y, 0 + height * rawScroll, 10, delta)

    textRef.current.position.y = dampedTextY
  })

  return (
    <group ref={textRef} position={[0, 0, 0]}>
      <Html center className='flex w-screen flex-col items-center justify-center text-center'>
        <TypingText delay={1000} finalText={'Addy Ireland'} speed={100} />
        <ScrollText>
          <ScrollTextElement>{differenceInYears(new Date(), birthday)} years old</ScrollTextElement>
          <ScrollTextElement>penn state university</ScrollTextElement>
          <ScrollTextElement>computer science</ScrollTextElement>
          <ScrollTextElement>brother of alpha chi rho</ScrollTextElement>
        </ScrollText>
      </Html>
    </group>
  )
}

export default ThreeHeader
