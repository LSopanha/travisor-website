<template>
  <v-container class="my-10">
    <v-card class="pa-6 rounded-xl" outlined>
      <div class="d-flex flex-column align-center justify-center mb-16">
        <!-- Blog Title -->
        <v-row>
          <v-col>
            <h2 class="text-h5 font-weight-bold">
              The best beaches in Cambodia
            </h2>
          </v-col>
        </v-row>

        <!-- Author, Date, and Total Likes -->
        <v-row>
          <v-col class="d-flex align-center" cols="auto">
            <v-img
              src="/images/default-profile-picture.PNG"
              alt="Author profile"
              class="rounded-circle"
              max-width="40"
            ></v-img>
          </v-col>
          <v-col cols="auto">
            <div class="d-flex flex-column">
              <span class="text-subtitle-2 font-weight-bold secondary--text"
                >Leavchum Sopanha</span
              >
              <span class="caption grey--text">July 19, 2024 - 8 likes</span>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- Blog Content -->
      <v-row>
        <v-col>
          <h3 class="text-h6 font-weight-bold">Koh Ta Khiev, Sihanoukville</h3>
          <p class="subtitle-2 font-weight-medium">
            Best for a low-key island getaway
          </p>
          <p>
            If your dream beach escape involves switching off and tuning out,
            then the little island of Koh Ta Khiev, off the coast near Ream
            National Park, will tick all the right boxes. Although developers
            are circling, for the moment the southern tip of the island retains
            its castaway mood, with a clutch of delightfully bohemian and
            eco-friendly budget digs and the impressive Long Beach to sprawl on.
            This is where the backpacking vibe of Otres Village lives on under
            the watchful gaze of high-rise Sihanoukville.
          </p>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
h2,
h3 {
  margin: 0;
}

v-card {
  border-radius: 16px;
}

.rounded-circle {
  border-radius: 50%;
}
</style>
