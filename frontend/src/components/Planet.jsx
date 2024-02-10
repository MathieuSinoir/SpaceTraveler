import { Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import "../styles/Planet.css";

import FormContext from "../contexts/FormContext";

const baseURL = import.meta.env.VITE_BACKEND_URL_PUBLIC;

function Planet() {
  const buttonSpaceShip = useContext(FormContext);
  const planet = useLoaderData();

  return (
    <div style={{ color: "white" }}>
      <div>
        <Link to="/Catalog">
          <img
            className="returnbtn"
            src={buttonSpaceShip.formData.spaceShipImage}
            alt="Retour"
          />
        </Link>
      </div>
      <section className="container">
        <div className="visualbox">
          <img
            className="planetImg"
            src={`${baseURL}${planet.image}`}
            alt="Planet"
          />

          <div className="btnmodel">
            <Link to="model">View 3D model</Link>
          </div>
        </div>

        <div className="boxdesc">
          <h1 className="planetTitle">{planet.name}</h1>
          <article className="description">
            <div className="alignbox">
              <div className="rowbox">
                <h3>Type: </h3>
                <p>{planet.type}</p>
              </div>
              <div className="rowbox">
                <h3>Diameter: </h3>
                <p>{planet.diameterInKm} km</p>
              </div>
            </div>

            <div className="informations">
              <h3>Rotation Speed :</h3>
              <p> {planet.rotationSpeed}</p>
            </div>

            <div className="informations">
              <h3>Composition:</h3>
              <p> {planet.composition}</p>
            </div>

            <div className="informations">
              <h3>Known Moons:</h3>
              <p>{planet.knownMoons}</p>
            </div>
            <div className="informations">
              <h3>Temperature:</h3>
              <p>{planet.temperatureInC}°C</p>
            </div>
            <div>
              <h3>Fun Fact: </h3>
              <p>
                <TypeAnimation
                  sequence={[`${planet.funFact}`, 1000]}
                  speed={40}
                  repeat={1}
                />
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Planet;
