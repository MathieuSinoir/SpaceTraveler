import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const getAll = () =>
  client.get("/planets").then((response) => {
    console.info(response);
    return response.data;
  });

export const getByName = (planetId) =>
  client.get(`/planets/${planetId}`).then((response) => {
    console.info(response);
    return response.data;
  });
