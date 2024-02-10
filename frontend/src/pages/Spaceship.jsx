/* eslint-disable jsx-a11y/control-has-associated-label */
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import FormContext from "../contexts/FormContext";

import "../styles/SpaceShip.css";
import Carousel from "../components/Carousel";

function Spaceship() {
  // Accessing to context state
  const { formData, setFormData } = useContext(FormContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO : Persist data
    navigate("/Catalog");
  };

  const registerUserName = (event) => {
    // Using spread operator to retrieve and not erase context data
    setFormData({ ...formData, username: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="title">Choose your spaceship :</h1>
      <Carousel />
      <input
        type="text"
        placeholder="Enter your name"
        onChange={registerUserName}
        required
      />
      <button type="submit" className="submitButton">
        Choose
      </button>
    </form>
  );
}

export default Spaceship;
