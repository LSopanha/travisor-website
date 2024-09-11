<template>
  <v-container class="pa-0" fluid>
    <section class="home">
      <v-img
        :src="slides[0].image"
        height="100vh"
        width="100vw"
        class="d-flex align-center justify-center"
        contain
      >
        <!-- Overlay -->
        <div class="overlay"></div>
        <v-container
          class="text-center fill-height d-flex flex-column justify-center"
        >
          <h2 class="white--text" style="font-size: 30px !important">
            {{ slides[0].subtitle }}
          </h2>
          <h1
            class="font-weight-bold display-1 primary--text"
            style="
              font-size: 46px !important;
              text-shadow: 2px 2px 2px white;
              max-width: 600px;
            "
          >
            {{ slides[0].title }}
          </h1>
          <p class="white--text" style="font-size: 30px !important">
            {{ slides[0].description }}
          </p>
          <v-btn color="orange" href="#" class="mt-4">More trip</v-btn>
        </v-container>
      </v-img>
    </section>

    <!-- Travel Guides -->
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
          subtitle: "To travel is to Live",
          title: "The Most Beautiful Places To Visit In Cambodia",
          description: "Thank you for visiting us.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.text-center {
  position: relative;
  z-index: 2;
}
</style>
