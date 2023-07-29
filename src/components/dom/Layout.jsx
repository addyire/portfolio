'use client'

import { useEffect, useMemo, useRef } from 'react'
import dynamic from 'next/dynamic'
import { ScrollContext } from '@/helpers/context'
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

const Layout = ({ children }) => {
  const ref = useRef()
  const scroll = useMemo(() => ({ pageProgress: 0, scroll: () => console.log('no scroller') }), [])

  useEffect(() => {
    if (!ref || !ref.current || !scroll) return

    scroll.scroll = (top) => ref.current?.scroll({ top, behavior: 'smooth' })

    const onScroll = () =>
      scroll.pageProgress = ref.current.scrollTop / window.innerHeight

    // initial call incase browser saves scroll position on reload
    onScroll()

    ref.current.addEventListener('scroll', onScroll)
    return () => ref.current?.removeEventListener('scroll', onScroll)
  }, [scroll])

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
        touchAction: 'auto',
        overscrollBehavior: 'none',
        scrollBehavior: 'smooth',
      }}
    >
      <ScrollContext.Provider value={scroll}>
        {children}
      </ScrollContext.Provider>
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
