import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";

import SolarSystem from "../../public/Solarsystem";

import "../styles/Exploration.css";

function Exploration() {
  return (
    <>
      <div className="tutorialExploration">
        <p>🖱️ Right click down to move in space</p>
        <p>🖱️ Left click down to move the celestial body</p>
      </div>
      <Canvas>
        <OrbitControls />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <ambientLight intensity={2} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <directionalLight position={[0, 0, 0]} intensity={1} />
        <Suspense fallback={null}>
          <SolarSystem />
        </Suspense>
      </Canvas>
    </>
  );
}

export default Exploration;
