import React, { Suspense } from "react";
import CanvasContainer from "./components/CanvasContainer";
import Model from "./components/Model";
import PortfolioCard from "./components/PortfolioCard";
import RotatingCube from "./components/RotatingCube";
import Loader from "./components/Loader";

function App() {
    return (
        <div style={{ height: "100vh" }}>
            <CanvasContainer>
                <Suspense fallback={<Loader />}>
                    <ambientLight intensity={0.5} />
                    <RotatingCube />
                    <PortfolioCard position={[-3, 0, 0]} title="Project 1" />
                    <PortfolioCard position={[3, 0, 0]} title="Project 2" />
                    <Model path="/assets/models/portfolio-model.glb" />
                </Suspense>
            </CanvasContainer>
        </div>
    );
}

export default App;
