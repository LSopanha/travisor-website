<template>
  <section class="py-5 accent">
    <h2 class="primary--text text-center mb-5">Top Destinations</h2>
    <v-row class="justify-center">
      <div
        v-for="(destination, index) in topDestinations"
        :key="index"
        class="text-center pa-4"
      >
        <v-img
          :src="destination.image"
          aspect-ratio="1"
          class="rounded-xl"
          style="width: 275px"
        ></v-img>
        <p class="font-weight-bold mt-2">{{ destination.title }}</p>
      </div>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      slides: [
        {
          image: "/images/home.png",
          subtitle: "To travel is to Live",
          title: "The Most Beautiful Places To Visit In Cambodia",
          description: "Thank you for visiting us.",
        },
      ],
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
      topDestinations: [
        { image: "/images/desti_vietnam.jpg", title: "Vietnam" },
        { image: "/images/desti_china.jpg", title: "China" },
        { image: "/images/desti_cambodia.jpg", title: "Cambodia" },
        { image: "/images/desti_japan.jpg", title: "Japan" },
      ],
    };
  },
};
</script>
