<template>
  <v-container class="pa-0" fluid>
    <!-- Banner -->
    <travisor-banner
      :homePage="true"
      :slides="slides"
      :subtitle="slides[0].subtitle"
      :title="slides[0].title"
      :description="slides[0].description"
      :image="slides[0].image"
    ></travisor-banner>

    <!-- Destination Types -->
    <travisor-destination-types></travisor-destination-types>

    <!-- Travel Guides -->
    <travisor-travel-guides></travisor-travel-guides>

    <!-- Top Destinations -->
    <travisor-top-destinations></travisor-top-destinations>
  </v-container>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      slides: [
        {
          image: "/images/home.png",
          subtitle: "Live To Travel",
          title: "The Most Beautiful Places To Visit In Cambodia",
          description: "Thank you for visiting us.",
        },
      ],
    };
  },
};
</script>
