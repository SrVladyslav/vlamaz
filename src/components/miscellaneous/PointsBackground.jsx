'use client'

import React, { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Points as Po, Point, PointMaterial, pointsMaterial } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';

// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'


const particlesCount = 3000;
const particlePositions = new Float32Array(particlesCount * 3);

const randomRange =(min, max)=>{
    return min + (max - min) * Math.random();
}
for (let i = 0; i < particlesCount; i++) {
  const i3 = i * 3;
  particlePositions[i3] = randomRange(-1, 1) //Math.random();
  particlePositions[i3 + 1] = randomRange(-1, 1) //Math.random();
  particlePositions[i3 + 2] = randomRange(-1, 1) //Math.random();
}

export const Particles = (color) => {

    const mesh = useRef(null)
    // Animar puntos
    useFrame((state, delta) => {
      // puedes añadir animaciones aquí si quieres
        mesh.current.rotation.x -= delta / 10
        mesh.current.rotation.y -= delta / 15
    });

    return (
        <points ref={mesh} rotation={[0,0, Math.PI / 4]}>
        <bufferGeometry>
            <bufferAttribute
            attach='attributes-position'
            count={particlesCount}
            itemSize={3}
            array={particlePositions}
            />
        </bufferGeometry>
        <pointsMaterial
            size={0.007}
            color={color}
            transparent
            sizeAttenuation={true}
            dethWrite={false}
        />
        </points>
    );
};

const PointsBackground = (color) => {
    return (
        <div className='w-full h-auto absolute inset-0 z-[20]'>
            <Canvas camera={{position:[0,0,0],fov:25}}>
                <ambientLight intensity={2} />
                <directionalLight position={[2,1,1]}/>
                {/* <Points /> */}
                <Particles color={color}/>
                {/* <OrbitControls target={[0, 0, 0]} enableZoom={true} /> */}
            </Canvas>
        </div>
    );
}

export default PointsBackground;
