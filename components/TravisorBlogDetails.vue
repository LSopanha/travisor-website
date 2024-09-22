<template>
  <v-container class="my-10">
    <v-card-title class="justify-end px-0">
      <div>
        <v-btn color="black" class="white--text" @click="$router.go(-1)">
          Back
        </v-btn>
      </div>
    </v-card-title>

    <v-card class="pa-6 rounded-xl" outlined>
      <div class="d-flex flex-column align-center justify-center mb-16">
        <!-- Blog Title -->
        <v-row>
          <v-col>
            <h2 class="text-h5 font-weight-bold">{{ title }}</h2>
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
              <span class="text-subtitle-2 font-weight-bold secondary--text">
                {{ authorFirstName }} {{ authorLastName }}
              </span>
              <span class="caption grey--text">
                {{ formattedDate }}
              </span>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- Blog Content -->
      <v-row>
        <v-col>
          <p>{{ text }}</p>
        </v-col>
      </v-row>

      <!-- Like Button and Count -->
      <v-row class="d-flex align-center justify-center">
        <v-col class="d-flex align-center">
          <v-btn
            outlined
            @click="toggleLike"
            :disabled="likeButtonDisabled"
            :class="{ 'primary--text': liked }"
          >
            <v-icon>{{
              liked ? "mdi-thumb-up" : "mdi-thumb-up-outline"
            }}</v-icon>
          </v-btn>
          <span class="ml-2">{{ likes }} liked</span>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    authorFirstName: {
      type: String,
      required: true,
    },
    authorLastName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      liked: false,
      likeButtonDisabled: false,
    };
  },
  computed: {
    formattedDate() {
      if (this.createdAt) {
        const date = new Date(this.createdAt);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
      return "";
    },
  },
  methods: {
    toggleLike() {
      this.likeButtonDisabled = true; // Disable button during processing
      this.liked = !this.liked; // Toggle the like state
      this.likes += this.liked ? 1 : -1; // Adjust likes
      setTimeout(() => {
        this.likeButtonDisabled = false; // Re-enable button after a delay
      }, 500);
    },
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
