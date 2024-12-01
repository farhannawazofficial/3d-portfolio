import React from "react";
import { Html } from "@react-three/drei";


const Loader = () => {
    return (
        <div
            style={{
                color: "white",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            Loading...
        </div>
    );
};

export default Loader;
