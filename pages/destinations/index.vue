<template>
  <v-container class="pa-0" fluid>
    <!-- Banner -->
    <travisor-banner
      :slides="slides"
      :title="slides[0].title"
      :description="slides[0].description"
      :image="slides[0].image"
    ></travisor-banner>

    <!-- Continent Cards -->
    <div class="mt-5 mb-16">
      <h1 class="text-center secondary--text font-weight-bold">
        Destination Category
      </h1>
      <v-row>
        <v-col
          class="pa-0 mb-5"
          v-for="(continent, index) in continents"
          :key="index"
          cols="12"
          md="4"
        >
          <travisor-continent-card
            :global_id="continent.global_id"
            :name="continent.continent_name"
            :description="continent.description"
            :image="continent.profile_picture"
          ></travisor-continent-card>
        </v-col>
      </v-row>
    </div>

    <!-- Top Destinations -->
    <travisor-top-destinations></travisor-top-destinations>
  </v-container>
</template>

<script>
import { useContinentStore } from "~/store/continent"; // Adjust the path as necessary

export default {
  data() {
    return {
      slides: [
        {
          image: "/images/destination.png",
          title: "DESTINATIONS",
          description: "Explore the list of destinations!",
        },
      ],
    };
  },
  computed: {
    continents() {
      const continentStore = useContinentStore();
      return continentStore.continents; // Get continents from the store
    },
  },
  async created() {
    const continentStore = useContinentStore();
    await continentStore.fetchContinents(); // Fetch continents when the component is created
  },
};
</script>
