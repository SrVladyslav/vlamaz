'use client'

import React, {useState, useRef, Suspense} from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial} from '@react-three/drei';

// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'

const StarBackground =(props:any)=>{
    const ref:any = useRef()
    const [sphere] = useState(()=>
        random.inSphere(new Float32Array(5000), {radius: 1.2})
    )

    useFrame((state, delta)=>{
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    })

    return (
        <mesh rotation={[0,0, Math.PI / 4]}>
            <Points
                ref={ref}
                position={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color={'orange'}
                    size={0.02}
                    sizeAttenuation={true}
                    dethWrite={false}
                />
            </Points>
        </mesh>
    )
}

const StarsCanvas = ()=> (
    <div className='w-full h-[200px] absolute inset-0 z-[20]'>
        <Canvas>
        {/* <Canvas shadows camera={{position: [0,0,2.5], fov:25}}> */}
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
                <StarBackground/>
            </Suspense>
        </Canvas>
    </div>
)

export default StarsCanvas;