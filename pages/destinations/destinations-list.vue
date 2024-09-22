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

    <!-- Country Name -->
    <h1 class="text-center secondary--text font-weight-bold">
      Destination Category
    </h1>

    <!-- Destination List -->
    <v-row>
      <v-col
        v-for="destination in destinations"
        :key="destination.global_id"
        cols="12"
        md="4"
        class="pa-2"
      >
        <travisor-destination-card
          :global_id="destination.global_id"
          :name="destination.destination_name"
          :description="truncateDescription(destination.description, 200)"
          :image="destination.profile_picture"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useDestinationStore } from "~/store/destination";

export default {
  name: "DestinationListByCountry",
  data() {
    return {
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
    destinations() {
      return this.destinationStore.destinations; // Access Pinia state
    },
  },
  async mounted() {
    const countryId = this.$route.query.countryId;

    if (!countryId) {
      console.error("Country ID not found in the route.");
      return;
    }

    try {
      await this.destinationStore.fetchDestinationByCountry(countryId);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    }
  },
  methods: {
    truncateDescription(description, length) {
      return description && description.length > length
        ? description.substring(0, length) + "..."
        : description || "No description provided";
    },
  },
  created() {
    this.destinationStore = useDestinationStore(); // Initialize store
  },
};
</script>
