import { defineStore } from 'pinia';
import axios from 'axios';

export const useDestinationStore = defineStore('destination', {
  state: () => ({
    destinations: [],
    destination: {},
  }),

  actions: {
    setDestination(destination) {
      this.destination = destination;
    },
    setDestinations(destinations) {
      this.destinations = destinations;
    },
    async fetchDestinationByCountry(id) {
      try {
        const response = await axios.get(`${process.env.publicApi}destinations-list/${id}`);
        this.setDestinations(response.data.data);
        console.log(this.destinations);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    },
    async fetchDestinationById(id) {
      try {
        const response = await axios.get(`${process.env.publicApi}destinations/${id}`);
        this.setDestination(response.data.data);
      } catch (error) {
        console.error("Error fetching destination details:", error);
      }
    },
  },
});
