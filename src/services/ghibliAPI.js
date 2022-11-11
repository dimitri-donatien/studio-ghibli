import axios from "axios";

const url = "https://ghibliapi.herokuapp.com";

export const getFilms = () => axios.get(`${url}/films`);

export const getFilm = (id) => axios.get(`${url}/films/${id}`);

export const getPeople = () => axios.get(`${url}/people`);

export const getPerson = (id) => axios.get(`${url}/people/${id}`);

export const getLocations = () => axios.get(`${url}/locations`);

export const getLocation = (id) => axios.get(`${url}/locations/${id}`);

export const getSpecies = () => axios.get(`${url}/species`);

export const getSpecie = (id) => axios.get(`${url}/species/${id}`);

export const getVehicles = () => axios.get(`${url}/vehicles`);

export const getVehicle = (id) => axios.get(`${url}/vehicles/${id}`);