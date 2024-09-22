<template>
  <div class="mx-16 pa-0">
    <v-card
      :loading="loading"
      class="d-flex flex-row align-center justify-center mx-16 pa-5 rounded-xl"
      style="background-color: #f0f7fc"
    >
      <!-- Progress Bar -->
      <template v-slot:progress>
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <!-- Image Column -->
      <v-col cols="2" class="d-flex align-center justify-center">
        <v-responsive>
          <v-img class="img-side" src="/images/home.png"></v-img>
        </v-responsive>
      </v-col>

      <!-- Content Summary Column -->
      <v-col cols="10" class="d-flex flex-column align-start justify-center">
        <div class="d-flex flex-row align-center pa-0">
          <v-img
            :src="'/images/default-profile-picture.PNG'"
            class="rounded-circle"
            style="aspect-ratio: 1; border: 2px solid blue"
            :max-width="20"
            cover
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
          <p class="text-subtitle-1 pa-0 ma-0 pl-2">
            {{ firstName }} {{ lastName }}
          </p>
        </div>

        <!-- Truncated Title with Ellipsis -->
        <v-card-title class="truncate-container pa-0">
          <span class="truncate-text">
            {{ title }}
          </span>
        </v-card-title>

        <!-- Date and Time -->
        <p class="text-subtitle-2 grey--text ma-0">
          {{ formatPostedDate(postedDate) }} -
          <span>{{ totalLikes }} likes</span>
        </p>

        <!-- Read Button -->
        <v-card-actions class="pa-0">
          <v-btn
            class="pa-0"
            color="secondary lighten-2"
            text
            @click="viewBlogDetail(global_id)"
          >
            READ THIS
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    global_id: {
      type: String,
      default: "",
    },
    blog: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    profilePicture: {
      type: String,
      default: "",
    },
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    totalLikes: {
      type: Number,
      default: 0,
    },
    postedDate: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    loading: false,
    title:
      "Kirirom Camping Park Resort Camping Hiking and Mountain Biking Resort Kirirom Mountain Cambodiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  }),

  methods: {
    async viewBlogDetail(global_id) {
      this.isActive = !this.isActive;
      this.$router.push({
        path: "blog/blog-details",
        query: { blogId: global_id },
      });
    },
    formatPostedDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style scoped>
.img-side {
  width: 190px !important;
  height: 140px !important;
  padding: 10px;
  border-radius: 20px;
}

.truncate-container {
  width: 100%;
}

.truncate-text {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
</style>
