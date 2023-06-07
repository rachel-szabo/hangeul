/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.12 public/models/koreanLantern.glb
Author: Korea Craft & Design Foundation (https://sketchfab.com/wipco6080)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/kcdf--stand-lighting-pic05-02f5f0a17fdb4b9c83b26a0070426c25
Title: KCDF-좌등_일월오봉도(Stand lighting_pic05)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function KoreanLantern(props) {
  const { nodes, materials } = useGLTF('/models/koreanLantern.glb')

  return (
    <group {...props} dispose={null}>
      {/* <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 467.5]}>
            <mesh geometry={nodes.Lamp_Wood_02_02_M_Wood_gurumi_01_0.geometry} material={materials.M_Wood_gurumi_01} position={[0, 0, 241.25]} />
          </group>
          <group position={[0, 0, 100]}>
            <mesh geometry={nodes.Lamp_Wood_02_03_M_Wood_gurumi_01_0.geometry} material={materials.M_Wood_gurumi_01} position={[0, 0, -219.22]} />
          </group>
          <group position={[0, 0, 125]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
            <mesh geometry={nodes.Lamp_Wood_02_05_M_Wood_gurumi_01_0.geometry} material={materials.M_Wood_gurumi_01} position={[0, 619.45, -123.5]} />
          </group>
          <group position={[0, 0, 230]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Lamp_Hanji_02_M_Hanji_02_0.geometry} material={materials.M_Hanji_02} position={[0, 235, 116.5]} />
          </group>
          <mesh geometry={nodes.Lamp_Wood_02_04_M_Wood_gurumi_01_0.geometry} material={materials.M_Wood_gurumi_01} position={[0, 0, -119.22]} />
        </group>
      </group> */}
      <group scale={5} position={[-150,80,-80]}>
        <mesh material={materials.M_Hanji_02}> 
          <planeGeometry args={[25,10]}/>
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/koreanLantern.glb')