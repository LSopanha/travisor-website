import { defineStore } from 'pinia';
import axios from 'axios';

export const useContinentStore = defineStore('continent', {
   state:() => ({
      continents: [],
      continent: {}
   }),

   actions: {
      setContinent(continent) {
         this.continent = continent;
      },
      setContinents(continents) {
         this.continents = continents;
      },
      async fetchContinentById(continentID) {
         const response = await axios.get(`${process.env.publicApi}continents/${continentID}`);
         this.setContinent(response.data.data);
      },
      async fetchContinents() {
         const response = await axios.get(`${process.env.publicApi}continents`);
         this.setContinents(response.data.data)
      },
   }
})