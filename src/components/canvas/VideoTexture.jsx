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
    unsuspend: 'loadstart',
    start: false,
    playsInline: true,
    preload: 'none'
  })

  useFrame(() => {
    const sp = scroll.pageProgress

    // start playing when laptop begins opening
    if (sp !== 0 && texture.image.paused)
      texture.image.play()

    // hide video when not visible
    if (materialRef.current && sp > .15 && sp < 2.25)
      materialRef.current.visible = true
    else if (materialRef.current && materialRef.current.visible)
      materialRef.current.visible = false
  })

  return <meshBasicMaterial map={texture} ref={materialRef} toneMapped={false} />
}


export default VideoTexture
