import { Environment, Lightformer } from "@react-three/drei"

const Env = () =>
  <Environment frames={1} resolution={256} blur={1}>
    <Lightformer
      form='rect'
      intensity={0.4}
      color='#d2defc'
      scale={[10, 10]}
      position={[0, 5, 0]}
      target={[0, 0, 0]}
    />
    <Lightformer
      form='rect'
      intensity={0.05}
      color='#dce5fc'
      scale={[10, 10]}
      position={[0, -10, 0]}
      target={[0, 0, 0]}
    />
    <Lightformer
      form='rect'
      intensity={0.2}
      color='#dce5fc'
      scale={[10, 10, 10]}
      position={[-10, 0, 0]}
      target={[0, 0, 0]}
    />
    <Lightformer
      form='rect'
      intensity={0.2}
      color='#f5f8ff'
      scale={[10, 10, 10]}
      position={[10, 0, 0]}
      target={[0, 0, 0]}
    />
    <Lightformer
      form='rect'
      intensity={0.15}
      color='#e3eafa'
      scale={[10, 15, 1]}
      position={[0, 0, 15]}
      target={[0, 0, 0]}
    />
  </Environment>

export default Env
