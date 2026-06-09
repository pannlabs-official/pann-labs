'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating particle field — data nodes
function DataParticles({ count = 1800 }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4.5;
      pos[i * 3]     = (Math.random() - 0.5) * r * 2;
      pos[i * 3 + 1] = (Math.random() - 0.5) * r * 1.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * r;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.04;
    ref.current.rotation.x = Math.sin(t * 0.02) * 0.08;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#A0522D"
        size={0.022}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

// Slowly rotating grid rings
function GridRings() {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.z = t * 0.025;
    groupRef.current.rotation.x = Math.sin(t * 0.015) * 0.15;
  });

  const rings = useMemo(() => {
    return [2.2, 3.0, 3.8].map((radius, i) => {
      const points = [];
      const segments = 64;
      for (let j = 0; j <= segments; j++) {
        const angle = (j / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          0
        ));
      }
      return { points, radius, i };
    });
  }, []);

  return (
    <group ref={groupRef}>
      {rings.map(({ points, i }) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial
              color="#8B4513"
              transparent
              opacity={0.1 + i * 0.04}
            />
          </line>
        );
      })}
    </group>
  );
}

// Central glowing sphere
function CoreSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.12;
    meshRef.current.rotation.x = t * 0.07;
    const scale = 1 + Math.sin(t * 0.8) * 0.04;
    meshRef.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[0.55, 1]} />
      <meshStandardMaterial
        color="#A0522D"
        wireframe
        transparent
        opacity={0.22}
        emissive="#8B4513"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 3, 3]} intensity={1.4} color="#D2B48C" />
      <pointLight position={[-3, -2, -3]} intensity={0.5} color="#8B4513" />
      <DataParticles />
      <GridRings />
      <CoreSphere />
    </Canvas>
  );
}
