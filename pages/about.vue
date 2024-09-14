<template>
  <v-container class="pa-0" fluid>
    <!-- Banner -->
    <travisor-banner
      :slides="slides"
      :title="slides[0].title"
      :description="slides[0].description"
      :image="slides[0].image"
    >
    </travisor-banner>

    <!-- Our Story -->
    <our-story></our-story>

    <!-- Our Mission -->
    <our-mission></our-mission>

    <!-- Our Vision -->
    <our-vision></our-vision>
  </v-container>
</template>

<script>
import OurStory from "~/components/About/OurStory.vue";
import OurMission from "~/components/About/OurMission.vue";
import OurVision from "~/components/About/OurVision.vue";

export default {
  components: { OurStory, OurMission, OurVision },
  data() {
    return {
      slides: [
        {
          image: "/images/about.jpg",
          title: "ABOUT US",
          description: "We deliver the best sources for your travel experince!",
        },
      ],
    };
  },
};
</script>

<style scoped>
.about {
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
