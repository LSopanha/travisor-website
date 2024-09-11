<template>
  <section class="travel_guides">
    <h2 class="primary--text text-center">Travel Guides</h2>
    <p class="text-center mb-2" style="font-size: 20px !important">
      Popular travel blog posts & guides
    </p>
    <div class="d-flex align-center justify-center">
      <v-col
        v-for="(guide, index) in travelGuides"
        :key="index"
        cols="2"
        sm="2"
        class="text-center pa-0 d-flex flex-column align-center justify-center"
      >
        <v-img
          :src="guide.image"
          aspect-ratio="1"
          class="rounded-xl"
          style="width: 80%"
        ></v-img>
        <p class="font-weight-bold mt-2">{{ guide.title }}</p>
      </v-col>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      destinations: [
        { image: "/images/Cultural Tours.jpg", title: "Cultural Tours" },
        { image: "/images/Adventure trips.jpg", title: "Adventure Trips" },
        { image: "/images/Beach Vacatios.jpg", title: "Beach Vacations" },
      ],
      travelGuides: [
        { image: "/images/guides_korea.jpg", title: "Korea" },
        { image: "/images/guides_cambodia.jpg", title: "Cambodia" },
        { image: "/images/guides_japan.jpg", title: "Japan" },
        { image: "/images/guides_taiwan.jpg", title: "Taiwan" },
      ],
    };
  },
};
</script>
