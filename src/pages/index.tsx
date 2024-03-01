/* eslint-disable react/no-unknown-property */

import { OrthographicCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'

import { BlendColorPlane } from '~/Objects/blendColorPlane'
import { DefaultLayout } from '~/layouts/DefaultLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <Canvas>
          <ambientLight />
          <BlendColorPlane />
          <OrthographicCamera position={[-0.5, 0.5, 0.5]} near={0.1} far={10} />
        </Canvas>
      </DefaultLayout>
    </>
  )
}
