import axios from 'axios';

const state = {
    films: [],
    film: {},
    peoples: [],
    people: {},
    locations: [],
    location: {},
    species: [],
    specie: {},
    vehicles: [],
    vehicle: {},
    loading: false,
    error: null
};
const getters = {
    allFilms: (state) => state.films,
    film: (state) => state.film,
    allPeoples: (state) => state.peoples,
    people: (state) => state.people,
    allLocations: (state) => state.locations,
    location: (state) => state.location,
    allSpecies: (state) => state.species,
    specie: (state) => state.specie,
    allVehicles: (state) => state.vehicles,
    vehicle: (state) => state.vehicle,
    loading: (state) => state.loading,
    error: (state) => state.error
};
const actions = {
    async getFilms({ commit }) {
        const response = await axios.get('/films');
        commit('setFilms', response.data);
    },
    async getFilm({ commit }, id) {
        const response = await axios.get(`/films/${id}`);
        commit('setFilm', response.data);
    },
    async getPeoples({ commit }) {
        const response = await axios.get('/people');
        commit('setPeoples', response.data);
    },
    async getPeople({ commit }, id) {
        const response = await axios.get(`/people/${id}`);
        commit('setPeople', response.data);
    },
    async getLocations({ commit }) {
        const response = await axios.get('/locations');
        commit('setLocations', response.data);
    },
    async getLocation({ commit }, id) {
        const response = await axios.get(`/locations/${id}`);
        commit('setLocation', response.data);
    },
    async getSpecies({ commit }) {      
        const response = await axios.get('/species');
        commit('setSpecies', response.data);
    },
    async getSpecie({ commit }, id) {
        const response = await axios.get(`/species/${id}`);
        commit('setSpecie', response.data);
    },
    async getVehicles({ commit }) {
        const response = await axios.get('/vehicles');
        commit('setVehicles', response.data);
    },
    async getVehicle({ commit }, id) {
        const response = await axios.get(`/vehicles/${id}`);
        commit('setVehicle', response.data);
    },
    setLoading({ commit }, loading) {
        commit('setLoading', loading);
    },
    setError({ commit }, error) {
        commit('setError', error);
    }
};
const mutations = {
    setFilms: (state, films) => (state.films = films),
    setFilm: (state, film) => (state.film = film),
    setPeoples: (state, peoples) => (state.peoples = peoples),
    setPeople: (state, people) => (state.people = people),
    setLocations: (state, locations) => (state.locations = locations),
    setLocation: (state, location) => (state.location = location),
    setSpecies: (state, species) => (state.species = species),
    setSpecie: (state, specie) => (state.specie = specie),
    setVehicles: (state, vehicles) => (state.vehicles = vehicles),
    setVehicle: (state, vehicle) => (state.vehicle = vehicle),
    setLoading: (state, loading) => (state.loading = loading),
    setError: (state, error) => (state.error = error)
};

export default {
  state,
  getters,
  actions,
  mutations
};