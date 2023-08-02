'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { ScrollContext } from '@/helpers/context'
import ScrollHint from '../ScrollHint'
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

const SCROLL_HINT_DELAY = 2500

const Layout = ({ children }) => {
  const ref = useRef()
  const scroll = useMemo(() => ({ pageProgress: 0, scroll: () => { }, loaded: false }), [])

  // undefined - initializing
  // true - show
  // false - hide
  const [showScrollHint, setShowScrollHint] = useState()

  const onScrollHintClick = useCallback(() => {
    ref.current?.scroll({ top: window.innerHeight, behavior: 'smooth' })
    console.log('click', window.innerHeight)
  }, [ref])

  useEffect(() => {
    if (!ref || !ref.current || !scroll) return

    const onScroll = () => {
      scroll.pageProgress = ref.current.scrollTop / window.innerHeight

      // if not scrolled and show hint has not been set yet
      if (scroll.pageProgress === 0 && showScrollHint === undefined)
        // after timeout, check if scrolled in meantime and if did not set show hint to true
        setTimeout(() => scroll.pageProgress === 0 && setShowScrollHint(true), SCROLL_HINT_DELAY)

      // if scrolled and not already hiden set to false
      if (scroll.pageProgress !== 0 && showScrollHint !== false) setShowScrollHint(false)
    }

    // manually call on scroll in case scroll pos saved
    if (!scroll.loaded) onScroll()

    // set scroll props
    scroll.scroll = (top) => ref.current?.scroll({ top, behavior: 'smooth' })
    scroll.loaded = true

    // setup event listener
    ref.current.addEventListener('scroll', onScroll, { passive: true })
    return () => ref.current?.removeEventListener('scroll', onScroll)
  }, [scroll, showScrollHint])

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
        <ScrollHint show={showScrollHint} onClick={onScrollHintClick} />
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
      </ScrollContext.Provider>
    </div>
  )
}

export { Layout }
