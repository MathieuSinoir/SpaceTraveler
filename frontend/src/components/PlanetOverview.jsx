import { Link } from "react-router-dom";
import { useContext } from "react";

import PropTypes from "prop-types";
import "../styles/Catalog.css";

import FormContext from "../contexts/FormContext";

const baseURL = import.meta.env.VITE_BACKEND_URL_PUBLIC;

function PlanetOverview({ planet }) {
  const buttonSpaceShip = useContext(FormContext);

  return (
    <section className="AllCardStyle">
      <div className="CardStyle">
        <div className="ZoomEffect">
          <img src={`${baseURL}${planet.image}`} alt="planet" />
        </div>
        <div className="TextCard">
          <h2>{planet.name}</h2>
          <p>{planet.description}</p>
        </div>
        <Link
          to={`/Planet/${planet.id}`}
          key={planet.id}
          className="ButtonContainer"
        >
          <img
            src={buttonSpaceShip.formData.spaceShipImage}
            alt="Spaceship button"
            className="SpaceShipImage"
          />
        </Link>
      </div>
    </section>
  );
}

PlanetOverview.propTypes = {
  planet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default PlanetOverview;
