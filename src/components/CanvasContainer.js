import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const CanvasContainer = ({ children }) => {
    return (
        <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls />
            {children}
        </Canvas>
    );
};

export default CanvasContainer;
