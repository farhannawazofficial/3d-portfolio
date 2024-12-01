import React from "react";
import { Html } from "@react-three/drei";

const PortfolioCard = ({ position, title }) => {
    return (
        <mesh position={position}>
            <boxGeometry args={[2, 3, 0.1]} />
            <meshStandardMaterial color="white" />
            <Html position={[0, 1.5, 0]} center>
                <div style={{ textAlign: "center", color: "black" }}>{title}</div>
            </Html>
        </mesh>
    );
};

export default PortfolioCard;
