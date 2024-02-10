import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import FormContext from "../contexts/FormContext";

import "../styles/PlanetModelContainer.css";

import Sun from "../../public/Sun";
import Mercury from "../../public/Mercury";
import Venus from "../../public/Venus";
import Earth from "../../public/Earth";
import Mars from "../../public/Mars";
import Jupiter from "../../public/Jupiter";
import Saturn from "../../public/Saturn";
import Uranus from "../../public/Uranus";
// eslint-disable-next-line import/no-named-as-default
import Neptune from "../../public/Neptune";

function PlanetModelContainer() {
  const { id: planetId } = useParams();
  console.info(planetId);

  const planetsModels = [
    { id: 1, component: <Sun /> },
    { id: 2, component: <Mercury /> },
    { id: 3, component: <Venus /> },
    { id: 4, component: <Earth /> },
    { id: 5, component: <Mars /> },
    { id: 6, component: <Jupiter /> },
    { id: 7, component: <Saturn /> },
    { id: 8, component: <Uranus /> },
    { id: 9, component: <Neptune /> },
  ];

  const buttonSpaceShip = useContext(FormContext);

  return (
    <>
      <div className="modelInterfaceContainer">
        <Link to={`/Planet/${planetId}`}>
          <img
            className="returnButtonPlanetModelContainer"
            src={buttonSpaceShip.formData.spaceShipImage}
            alt="Retour"
          />
        </Link>

        <div className="tuto">
          <p>🖱️ Right click down to move in space</p>
          <p>🖱️ Left click down to move the celestial body</p>
        </div>
      </div>
      <Canvas>
        <OrbitControls />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <ambientLight intensity={2} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <directionalLight position={[0, 0, 0]} intensity={1} />
        <Suspense fallback={null}>
          {
            planetsModels.filter(
              (model) => model.id === parseInt(planetId, 10)
            )[0].component
          }
        </Suspense>
      </Canvas>
    </>
  );
}

export default PlanetModelContainer;
