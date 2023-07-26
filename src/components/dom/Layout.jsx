'use client'

import { createContext, useEffect, useMemo, useRef } from 'react'
import dynamic from 'next/dynamic'
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

export const scrollContext = createContext()

const Layout = ({ children }) => {
  const ref = useRef()
  const scroll = useMemo(() => ({ pageProgress: 0 }), [])

  useEffect(() => {
    if (!ref || !ref.current || !scroll) return

    const onScroll = () =>
      scroll.pageProgress = ref.current.scrollTop / window.innerHeight

    ref.current.addEventListener('scroll', onScroll)
    return () => ref.current.removeEventListener('scroll', onScroll)
  }, [scroll])

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        touchAction: 'auto',
        overscrollBehavior: 'none',
        scrollBehavior: 'smooth'
      }}
    >
      <scrollContext.Provider value={scroll}>
        {children}
      </scrollContext.Provider>
      <Scene
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
        eventSource={ref}
        eventPrefix='client'
      />
    </div>
  )
}

export { Layout }
