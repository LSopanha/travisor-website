<template>
  <v-container class="country-card-container" fluid>
    <v-row justify="center">
      <v-col cols="12" md="12">
        <!-- Country Card -->
        <v-card class="country-card">
          <!-- Country Image -->
          <v-img
            :src="image"
            height="200px"
            class="country-img"
            alt="Country Image"
          ></v-img>

          <!-- Card Title and Description -->
          <v-card-title class="country-title px-5">{{ name }}</v-card-title>
          <v-card-text class="country-description px-5">
            {{ truncatedDescription }}
          </v-card-text>

          <!-- Action Button -->
          <v-card-actions class="d-flex align-center justify-center px-5">
            <v-btn color="primary" block @click="viewDetails(global_id)">
              View Details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    global_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    truncatedDescription() {
      const words = this.description.split(" ");
      if (words.length > 100) {
        return words.slice(0, 100).join(" ") + "...";
      }
      return this.description;
    },
  },
  methods: {
    viewDetails(global_id) {
      this.$router.push({
        name: "destinations-destinations-list",
        query: { countryId: global_id }, // Passing the global_id as countryId
      });
    },
  },
};
</script>

<style scoped>
.country-card {
  min-height: 490px; /* Match continent card height */
  margin-top: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
}

.country-img {
  border-radius: 10px 10px 0 0;
}

.country-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}

.country-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
  text-align: center;
}

.country-card-container {
  padding: 20px;
}
</style>
