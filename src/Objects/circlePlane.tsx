/* eslint-disable react/no-unknown-property */
import { useEffect } from 'react'

import { useFrame } from '@react-three/fiber'

import circleFragmentShader from '~/shaders/circleShader/fragment.glsl'
import circleVertexShader from '~/shaders/circleShader/vertex.glsl'

export const CirclePlane = () => {
  const uniforms = {
    u_time: { value: 0.0 },
    u_mouse: { value: { x: 0.0, y: 0.0 } },
    u_resolution: { value: { x: 0.0, y: 0.0 } },
  }

  useEffect(() => {
    if (uniforms.u_resolution !== undefined) {
      uniforms.u_resolution.value.x = window.innerWidth
      uniforms.u_resolution.value.y = window.innerHeight
    }
  }, [uniforms.u_resolution])

  useFrame(({ clock }) => {
    uniforms.u_time.value = clock.getElapsedTime()
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={circleVertexShader}
        fragmentShader={circleFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}
