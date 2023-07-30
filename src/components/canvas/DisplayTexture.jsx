import { ScrollContext } from "@/helpers/context"
import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useContext, useState, useEffect, forwardRef } from "react"
import * as THREE from 'three'

let autoPlayTried = false

const createVideoSource = (url, type) => {
  const source = document.createElement('source')

  source.src = url
  source.type = type

  return source
}

const NewVideoTexture = (_, ref) => {
  const scroll = useContext(ScrollContext)

  const imageTexture = useTexture('/laptop-image.jpg')
  const [texture, setTexture] = useState()
  const [videoPlaying, setVideoPlaying] = useState(false)

  useEffect(() => {
    const video = document.createElement('video')
    video.muted = true
    video.loop = true
    video.playsInline = true
    video.preload = 'none'

    video.appendChild(createVideoSource('/laptop-video.webm', 'video/webm'))
    video.appendChild(createVideoSource('/laptop-video.mp4', 'video/mp4'))

    const videoTexture = new THREE.VideoTexture(video)
    setTexture(videoTexture)

    const onCanPlay = () => setVideoPlaying(true)
    video.addEventListener('canplay', onCanPlay)

    return () => video.removeEventListener('canplay', onCanPlay)
  }, [])

  useFrame(() => {
    const sp = scroll.pageProgress

    // start playing when laptop begins opening
    if (sp !== 0 && texture?.image.paused && !autoPlayTried) {
      texture.image.play()
        .catch(_ => {
          autoPlayTried = true
          setVideoPlaying(false)
          console.log('error auto playing')
        })
    }
  })

  return <meshBasicMaterial map={videoPlaying ? texture : imageTexture} ref={ref} toneMapped={false} />
}

export default forwardRef(NewVideoTexture)
