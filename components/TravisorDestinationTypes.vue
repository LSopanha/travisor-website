<template>
  <section class="mt-16">
    <h1 class="text-center font-weight-regular">Find a Trip By Destination</h1>
    <v-row class="justify-center my-10">
      <div
        v-for="(destination, index) in destinations"
        :key="index"
        cols="auto"
        sm="4"
        class="text-center d-flex align-center justify-center"
      >
        <div class="mx-10">
          <v-img
            :src="destination.image"
            aspect-ratio="1"
            class="rounded-circle"
            width="170"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="primary lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <p class="font-weight-bold mt-2">{{ destination.title }}</p>
        </div>
      </div>
    </v-row>
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
    };
  },
};
</script>
