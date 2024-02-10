import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Catalog from "./pages/Catalog";
import SpaceCrew from "./pages/SpaceCrew";
import Exploration from "./pages/Exploration";
import Spaceship from "./pages/Spaceship";
import Planet from "./components/Planet";

import "./styles/App.css";
import { getAll, getByName } from "./services/planetService";
import { FormProvider } from "./contexts/FormContext";
import PlanetModelContainer from "./components/PlanetModelContainer";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        // A remplacer par la page avec le choix des vaisseaux
        // Le bouton choose redirigera vers /Catalog
        path: "/",
        element: <Spaceship />,
      },
      {
        path: "/Catalog",
        element: <Catalog />,
        loader: async () => {
          return getAll();
        },
      },
      {
        path: "/Exploration",
        element: <Exploration />,
      },
      {
        path: "/SpaceCrew",
        element: <SpaceCrew />,
      },
      {
        path: "/Planet/:id",
        element: <Planet />,
        loader: async ({ params: { id } }) => {
          return getByName(parseInt(id, 10));
        },
      },
      {
        path: "/Planet/:id/model",
        element: <PlanetModelContainer />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  </React.StrictMode>
);
