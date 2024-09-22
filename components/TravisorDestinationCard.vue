<template>
  <v-container class="destination-card-container" fluid>
    <v-row justify="center">
      <v-col cols="12" md="12">
        <!-- Destination Card -->
        <v-card class="destination-card">
          <!-- Destination Image -->
          <v-img
            :src="image"
            height="200px"
            class="destination-img"
            alt="Destination Image"
          ></v-img>

          <!-- Card Title and Description -->
          <v-card-title class="destination-title px-5">{{ name }}</v-card-title>
          <v-card-text class="destination-description px-5">
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
    viewDetails(destinationId) {
      this.$router.push({
        name: "destinations-destination-details",
        query: { destinationId }, // Passing the destinationId as a query parameter
      });
    },
  },
};
</script>

<style scoped>
.destination-card {
  min-height: 500px; /* Match continent card height */
  margin-top: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
}

.destination-img {
  border-radius: 10px 10px 0 0;
}

.destination-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}

.destination-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
  text-align: center;
}

.destination-card-container {
  padding: 20px;
}
</style>
