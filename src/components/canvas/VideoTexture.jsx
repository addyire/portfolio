import { ScrollContext } from "@/helpers/context"
import { useVideoTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useContext } from "react"
import { useRef } from "react"

const VideoTexture = () => {
  const materialRef = useRef()
  const scroll = useContext(ScrollContext)

  const texture = useVideoTexture('/laptop-video.webm', {
    muted: true,
    loop: true,
    unsuspend: 'canplay',
    start: true,
    playsInline: true
  })

  useFrame(() => {
    const sp = scroll.pageProgress

    // hide video when not visible
    if (materialRef.current && sp > .15 && sp < 2.25)
      materialRef.current.visible = true
    else if (materialRef.current && materialRef.current.visible)
      materialRef.current.visible = false
  })

  return <meshBasicMaterial map={texture} ref={materialRef} toneMapped={false} />
}


export default VideoTexture
