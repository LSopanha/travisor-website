<template>
  <div>
    <section class="main-container">
      <v-img
        :src="image"
        height="100vh"
        width="100vw"
        class="d-flex align-center justify-center"
      >
        <!-- Overlay -->
        <div class="overlay"></div>
        <v-container
          class="text-center fill-height d-flex flex-column justify-center"
        >
          <h2 class="white--text" style="font-size: 30px !important">
            {{ subtitle }}
          </h2>
          <h1
            class="font-weight-bold display-1 primary--text my-3"
            style="
              font-size: 46px !important;
              max-width: 600px;
              -webkit-text-stroke: 1px white;
            "
          >
            {{ title }}
          </h1>
          <p class="white--text" style="font-size: 20px !important">
            {{ description }}
          </p>
          <v-btn v-if="homePage" color="secondary" href="#" class="mt-4"
            >View Destinations</v-btn
          >
        </v-container>
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="primary lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true,
    },
    subtitle: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    homePage: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.main-container {
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
