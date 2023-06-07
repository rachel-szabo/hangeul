import { Environment } from "@react-three/drei"
import { Depth, LayerMaterial } from "lamina"
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Center } from "@react-three/drei"


//using Lamina library to create a background
export default function Background () {

    const sphereRef = useRef()
    useFrame((state, delta) => {
        //UNCOMMENT TO ANIMATE GRADIENT ON SPHERE
        // sphereRef.current.rotation.z += delta/22
        // sphereRef.current.rotation.y += delta/33
        // sphereRef.current.rotation.x += delta/45
    })

    return <>
        <Environment preset={"sunset"}/>

        <Center center>
            <group position={[0,4,0]}>
                <mesh ref={sphereRef}>
                    <sphereGeometry args={[45,64,64]}/>  
                    <LayerMaterial
                        side={THREE.BackSide}
                    >
                        <Depth
                            colorA={'#f2b84c'}
                            colorB={'#4b87ef'}
                            // colorA={'#F17F66'}
                            // colorB={'#63AE9B'}
                            alpha={0.9}
                            mode="normal"
                            near={130}
                            far={200}
                            origin={[100,100,-100]}
                        />
                    </LayerMaterial>
                </mesh>
            </group>
        </Center>
    </>
}