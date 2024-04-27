'use client'

import React, {Suspense, useRef, useState} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, pointsMaterial } from '@react-three/drei';


const Background3D =()=>(
    <div className='w-full h-full'>
        <Canvas>
            <ambientLight intensity={2}/>
            <directionalLight position={[2,1,1]}/>
            <Sphere/>
        </Canvas>
    </div>
)

// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'

const Sphere =()=>{
    const mesh = useRef(null)
    useFrame((state, delta)=>{
        mesh.current.rotation.x -= delta / 10
        mesh.current.rotation.y -= delta / 15
    })

    const [sphere] = useState(()=>
        random.inSphere(new Float32Array(5000), {radius: 1.2})
    )

    return (
        <mesh ref={mesh}>
            <sphereGeometry args={[2.5, 20, 20]}/>
            <meshStandardMaterial color={'orange'} transparent/>
        </mesh>
    )
}

export default Background3D