import React from "react";
import { Text } from "@react-three/drei";

const PortfolioCard = ({ position, title }) => {
    return (
        <mesh position={position}>
            <boxGeometry args={[2, 3, 0.1]} />
            <meshStandardMaterial color="white" />
            <Text position={[0, 1.5, 0]} fontSize={0.5} color="black">
                {title}
            </Text>
        </mesh>
    );
};

export default PortfolioCard;
