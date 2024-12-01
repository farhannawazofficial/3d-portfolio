import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const RotatingCube = () => {
    const cubeRef = useRef();

    useFrame(() => {
        if (cubeRef.current) {
            cubeRef.current.rotation.x += 0.01;
            cubeRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={cubeRef} position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="blue" />
        </mesh>
    );
};

export default RotatingCube;
