import axios from "axios";

const namespaced = true;

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
  loading: true,
  error: null,
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
  error: (state) => state.error,
};
const actions = {
  async getFilms({ commit }) {
    await axios
      .get("/films")
      .then((response) => {
        commit("setFilms", response.data);
      })
      .catch((error) => {
        commit("setError", error);
      }).finally(() => {
        commit("setLoading", false);
      });
  },
  async getFilm({ commit }, id) {
    await axios
      .get(`/films/${id}`)
      .then((response) => {
        commit("setFilm", response.data);
      })
      .catch((error) => {
        commit("setError", error);
      }).finally(() => {
        commit("setLoading", false);
      });
  },
  async getPeoples({ commit }) {
    await axios
      .get("/people")
      .then((response) => {
        commit("setPeoples", response.data);
      })
      .catch((error) => {
        commit("setError", error);
      }).finally(() => {
        commit("setLoading", false);
      });
  },
  async getPeople({ commit }, id) {
    await axios
      .get(`/people/${id}`)
      .then((response) => {
        commit("setPeople", response.data);
      })
      .catch((error) => {
        commit("setError", error);
      }).finally(() => {
        commit("setLoading", false);
      });
  },
  async getLocations({ commit }) {
    await axios
      .get("/locations")
      .then((response) => {
        commit("setLocations", response.data);
      })
      .catch((error) => {
        commit("setError", error);
      }).finally(() => {
        commit("setLoading", false);
      });
  },
  async getLocation({ commit }, id) {
    await axios
      .get(`/locations/${id}`)
      .then((response) => {
        commit("setLocation", response.data);
      })
      .catch((error) => {
        commit("setError", error);
      }).finally(() => {
        commit("setLoading", false);
      });
  },
  async getSpecies({ commit }) {
    await axios
      .get("/species")
      .then((response) => {
        commit("setSpecies", response.data);
      })
      .catch((error) => {
        commit("setError", error);
      }).finally(() => {
        commit("setLoading", false);
      });
  },
  async getSpecie({ commit }, id) {
    await axios
      .get(`/species/${id}`)
      .then((response) => {
        commit("setSpecie", response.data);
      })
      .catch((error) => {
        commit("setError", error);
      }).finally(() => {
        commit("setLoading", false);
      });
  },
  async getVehicles({ commit }) {
    await axios
      .get("/vehicles")
      .then((response) => {
        commit("setVehicles", response.data);
      })
      .catch((error) => {
        commit("setError", error);
      }).finally(() => {
        commit("setLoading", false);
      });
  },
  async getVehicle({ commit }, id) {
    await axios
      .get(`/vehicles/${id}`)
      .then((response) => {
        commit("setVehicle", response.data);
      })
      .catch((error) => {
        commit("setError", error);
      }).finally(() => {
        commit("setLoading", false);
      });
  },
  setLoading({ commit }, loading) {
    commit("setLoading", loading);
  },
  setError({ commit }, error) {
    commit("setError", error);
  },
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
  setError: (state, error) => (state.error = error),
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
