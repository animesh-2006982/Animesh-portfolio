"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Html, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function CharacterModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/character.glb");

  useFrame((state) => {
    const group = groupRef.current;

    if (!group) return;

    const cursorX = state.pointer.x;
    const cursorY = state.pointer.y;

    const targetRotationY = cursorX * 0.16;
    const targetRotationX = -cursorY * 0.05;

    group.rotation.y = THREE.MathUtils.lerp(
      group.rotation.y,
      targetRotationY,
      0.05
    );

    group.rotation.x = THREE.MathUtils.lerp(
      group.rotation.x,
      targetRotationX,
      0.05
    );

    group.position.y =
      -1.55 +
      Math.sin(state.clock.elapsedTime * 0.8) * 0.02;
  });

  return (
    <group
      ref={groupRef}
      position={[0, -1.55, 0]}
    >
      <primitive
        object={scene}
        scale={3}
      />
    </group>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={1.8} />

      <directionalLight
        position={[3, 5, 5]}
        intensity={2}
      />

      <directionalLight
        position={[-4, 2, 3]}
        intensity={1}
        color="#b8d0ff"
      />

      <pointLight
        position={[0, 2, 4]}
        intensity={1.4}
        color="#ffffff"
      />

      <Environment
        preset="city"
        environmentIntensity={0.35}
      />
    </>
  );
}

function LoadingCharacter() {
  return (
    <Html center>
      <span className="character-loading">
        LOADING
      </span>
    </Html>
  );
}

export default function CharacterScene() {
  return (
    <div className="character-scene">
      <div className="character-background-glow" />

      <div className="character-orbit character-orbit-one" />
      <div className="character-orbit character-orbit-two" />

      <Canvas
        className="character-canvas"
        camera={{
          position: [0, 0.15, 5],
          fov: 30,
        }}
        dpr={[1, 1.7]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <SceneLights />

        <Suspense fallback={<LoadingCharacter />}>
          <CharacterModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/character.glb");