<template>
  <v-container class="continent-card-container" fluid>
    <v-row justify="center">
      <v-col cols="12" md="12">
        <!-- Continent Card -->
        <v-card class="continent-card">
          <!-- Continent Image -->
          <v-img
            :src="image"
            height="200px"
            class="continent-img"
            alt="Continent Image"
          ></v-img>

          <!-- Card Title and Description -->
          <v-card-title class="continent-title px-5">{{ name }}</v-card-title>
          <v-card-text class="continent-description px-5">
            {{ truncatedDescription }}
          </v-card-text>

          <!-- Action Button -->
          <v-card-actions class="d-flex align-center justify-center px-5">
            <v-btn color="primary" block @click="viewDetails(global_id)">
              View List
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
        name: "destinations-countries-list",
        params: { global_id },
        query: { continentId: global_id },
      });
    },
  },
};
</script>

<style scoped>
.continent-card {
  min-height: 530px;
  margin-top: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
}

.continent-img {
  border-radius: 10px 10px 0 0;
}

.continent-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}

.continent-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}

.continent-card-container {
  padding: 20px;
}
</style>
