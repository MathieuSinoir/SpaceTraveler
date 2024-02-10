import React from "react";

import { useLoaderData } from "react-router-dom";
import PlanetOverview from "../components/PlanetOverview";

function Catalog() {
  const catalog = useLoaderData();

  console.info(catalog);

  return (
    <>
      {catalog.map((planet) => (
        <PlanetOverview key={planet.id} planet={planet} />
      ))}
    </>
  );
}

export default Catalog;
