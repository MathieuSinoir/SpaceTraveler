import React from "react";
import { useMediaQuery } from "react-responsive";
import SpaceCrewDesktop from "../components/SpaceCrewDesktop";
import SpaceCrewMobile from "../components/SpaceCrewMobile";

function SpaceCrew() {
  const isDesktop = useMediaQuery({ minWidth: 600 });

  return isDesktop ? <SpaceCrewDesktop /> : <SpaceCrewMobile />;
}

export default SpaceCrew;
