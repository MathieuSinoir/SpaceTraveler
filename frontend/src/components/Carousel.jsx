import React, { useState, useContext } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carousel.css";

import arrowForward from "../assets/chevron_right.svg";
import arrowBackward from "../assets/chevron_left.svg";

import spaceShip1 from "../assets/space_ship_1.png";
import spaceShip2 from "../assets/space_ship_2.png";
import spaceShip3 from "../assets/space_ship_3.png";

import FormContext from "../contexts/FormContext";

function Carousel() {
  const { formData, setFormData } = useContext(FormContext);

  const spaceShips = [spaceShip1, spaceShip2, spaceShip3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const registerSpaceShipImage = () => {
    // Using spread operator to retrieve and not erase context data
    setFormData({
      ...formData,
      spaceShipImage: spaceShips[currentIndex],
    });
  };

  const handleClickOnButton = (event) => {
    const imageReference = event.target.src.split("3000")[1];
    setCurrentIndex(spaceShips.indexOf(imageReference));
    setFormData({
      ...formData,
      spaceShipImage: imageReference,
    });
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === spaceShips.length - 1 ? 0 : prevIndex + 1
    );
    registerSpaceShipImage();
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? spaceShips.length - 1 : prevIndex - 1
    );
    registerSpaceShipImage();
  };

  return (
    <div>
      <div className="carouselContainer">
        <div className="mobileSpaceships">
          <button
            type="button"
            className="arrowButton"
            onClick={goToPrevSlide}
            disabled={currentIndex === 0}
          >
            <img
              src={arrowBackward}
              alt="Backward arrow"
              className="arrowButton"
            />
          </button>

          <img
            src={spaceShips[currentIndex]}
            alt={`slide-${currentIndex}`}
            className="spaceships"
            onLoad={registerSpaceShipImage}
          />
          <button
            type="button"
            className="arrowButton"
            onClick={goToNextSlide}
            disabled={currentIndex === spaceShips.length - 1}
          >
            <img
              src={arrowForward}
              alt="Forward arrow"
              className="arrowButton"
            />
          </button>
        </div>

        <div className="desktopSpaceships">
          {spaceShips.map((spaceship) => {
            const className = `clickableSpaceships ${
              spaceShips[currentIndex] === spaceship ? "zoomed" : ""
            }`;

            return (
              <div key={spaceship} className="spaceshipContainer">
                <button
                  type="button"
                  className={className}
                  onClick={handleClickOnButton}
                >
                  <img src={spaceship} alt="spaceShip" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
