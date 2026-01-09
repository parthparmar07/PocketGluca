import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating particles in background
const Particles = ({ count = 100 }) => {
    const mesh = useRef();

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 20;
            temp.push({ position: [x, y, z], scale: Math.random() * 0.05 + 0.02 });
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.getElapsedTime() * 0.02;
        }
    });

    return (
        <group ref={mesh}>
            {particles.map((particle, i) => (
                <mesh key={i} position={particle.position}>
                    <sphereGeometry args={[particle.scale, 8, 8]} />
                    <meshBasicMaterial color="#f97316" transparent opacity={0.6} />
                </mesh>
            ))}
        </group>
    );
};

// Glowing ring effect
const GlowRing = () => {
    const ringRef = useRef();

    useFrame((state) => {
        if (ringRef.current) {
            ringRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
            ringRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <mesh ref={ringRef} position={[0, 0, 0]}>
            <torusGeometry args={[2, 0.02, 16, 100]} />
            <meshBasicMaterial color="#22d3ee" transparent opacity={0.3} />
        </mesh>
    );
};

// Main Bottle Component
const Bottle = () => {
    const groupRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.1;
            groupRef.current.position.y = Math.sin(t * 0.5) * 0.1;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
            <group ref={groupRef} scale={1.2}>
                {/* Cap */}
                <mesh position={[0, 1.5, 0]}>
                    <cylinderGeometry args={[0.32, 0.32, 0.35, 32]} />
                    <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
                </mesh>

                {/* Cap Ring */}
                <mesh position={[0, 1.35, 0]}>
                    <torusGeometry args={[0.33, 0.03, 8, 32]} />
                    <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.3} />
                </mesh>

                {/* Bottle Body - Outer */}
                <mesh position={[0, 0, 0]} castShadow receiveShadow>
                    <cylinderGeometry args={[0.35, 0.35, 2.6, 32]} />
                    <meshPhysicalMaterial
                        color="#ffffff"
                        transmission={0.95}
                        thickness={0.5}
                        roughness={0.05}
                        metalness={0}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                        ior={1.5}
                    />
                </mesh>

                {/* Liquid Inside */}
                <mesh position={[0, -0.15, 0]}>
                    <cylinderGeometry args={[0.32, 0.32, 2.2, 32]} />
                    <meshPhysicalMaterial
                        color="#f97316"
                        transmission={0.6}
                        thickness={2}
                        roughness={0.1}
                        metalness={0}
                        emissive="#f97316"
                        emissiveIntensity={0.2}
                    />
                </mesh>

                {/* Label Area (white band) */}
                <mesh position={[0, 0.2, 0.001]}>
                    <cylinderGeometry args={[0.36, 0.36, 0.8, 32, 1, true]} />
                    <meshStandardMaterial
                        color="#ffffff"
                        opacity={0.9}
                        transparent
                        roughness={0.4}
                    />
                </mesh>

                {/* Bottom Cap */}
                <mesh position={[0, -1.3, 0]}>
                    <cylinderGeometry args={[0.35, 0.33, 0.15, 32]} />
                    <meshPhysicalMaterial
                        color="#ffffff"
                        transmission={0.9}
                        thickness={0.3}
                        roughness={0.1}
                    />
                </mesh>
            </group>
        </Float>
    );
};

const HeroScene = () => {
    return (
        <div className="w-full h-full">
            <Canvas
                dpr={[1, 2]}
                camera={{ position: [0, 0, 6], fov: 40 }}
                gl={{ antialias: true, alpha: true }}
            >
                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
                <directionalLight position={[-10, 5, 5]} intensity={0.5} color="#22d3ee" />
                <pointLight position={[0, -3, 3]} intensity={0.5} color="#f97316" />

                {/* Main Bottle */}
                <Bottle />

                {/* Background Effects */}
                <Particles count={50} />
                <GlowRing />

                {/* Shadow */}
                <ContactShadows
                    position={[0, -2, 0]}
                    opacity={0.3}
                    scale={8}
                    blur={2}
                    far={4}
                    color="#000000"
                />

                {/* Environment */}
                <Environment preset="studio" />
            </Canvas>
        </div>
    );
};

export default HeroScene;
