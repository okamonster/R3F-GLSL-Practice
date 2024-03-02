/* eslint-disable react/no-unknown-property */
import { useEffect } from 'react'

import { useFrame } from '@react-three/fiber'

import rectFragmentShader from '~/shaders/rectShader/fragment.glsl'
import rectVertexShader from '~/shaders/rectShader/vertex.glsl'

export const RectPlane = () => {
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
        vertexShader={rectVertexShader}
        fragmentShader={rectFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}
