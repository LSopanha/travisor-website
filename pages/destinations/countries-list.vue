<template>
  <v-container class="pa-0" fluid>
    <!-- Banner -->
    <travisor-banner
      :slides="slides"
      :title="slides[0].title"
      :description="slides[0].description"
      :image="slides[0].image"
    ></travisor-banner>

    <!-- Back Button -->
    <v-card-title class="justify-end px-10 pb-10">
      <v-btn color="black" class="white--text" @click="$router.go(-1)"
        >Back</v-btn
      >
    </v-card-title>
    <h1 class="text-center secondary--text font-weight-bold">
      Countries list in {{ continent.continent_name }}
    </h1>

    <!-- Countries List -->
    <v-row>
      <v-col
        v-for="country in continent.countries"
        :key="country.global_id"
        cols="12"
        md="4"
        class="pa-2"
      >
        <travisor-country-card
          :global_id="country.global_id"
          :name="country.country_name"
          :description="truncateDescription(country.description, 200)"
          :image="country.profile_picture"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useContinentStore } from "~/store/continent";

export default {
  name: "CountryList",
  components: {},
  data() {
    return {
      continentStore: useContinentStore(),
      slides: [
        {
          image: "/images/destination.png",
          title: "DESTINATIONS LIST",
          description: "Explore the list of destinations!",
        },
      ],
    };
  },
  computed: {
    continent() {
      return this.continentStore.continent;
    },
  },
  async mounted() {
    const continentId = this.$route.query.continentId;

    try {
      await this.continentStore.fetchContinentById(continentId);
    } catch (error) {
      console.error("Error fetching continent details:", error);
    }
  },
  methods: {
    truncateDescription(description, length) {
      return description && description.length > length
        ? description.substring(0, length) + "..."
        : description || "No description provided";
    },
  },
};
</script>
