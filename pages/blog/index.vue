<template>
  <v-container class="pa-0" fluid>
    <!-- Banner -->
    <travisor-banner
      :slides="slides"
      :title="slides[0].title"
      :description="slides[0].description"
      :image="slides[0].image"
    ></travisor-banner>

    <!-- Selected Options -->
    <div class="d-flex flex-column align-center justify-center mt-5">
      <h2 class="black--text font-weight-regular">
        See all posts from users around the world!
      </h2>
      <v-chip-group
        mandatory
        active-class="secondary--text"
        v-model="selectedOption"
      >
        <v-chip
          class="justify-center"
          style="width: 125px"
          outlined
          value="popular"
        >
          <v-icon class="mr-1">mdi-chart-line-variant</v-icon> Popular
        </v-chip>
        <v-chip
          class="justify-center"
          style="width: 125px"
          outlined
          value="latest"
        >
          <v-icon class="mr-1">mdi-autorenew</v-icon> Latest
        </v-chip>
      </v-chip-group>
    </div>

    <!-- Blog Cards -->
    <div class="mt-5 mb-16">
      <v-col class="pa-0 mb-5" v-for="(blog, index) in blogs" :key="index">
        <travisor-blog-card
          :blog="blog"
          :global_id="blog.global_id"
          :image="blog.image"
          :profile_picture="blog.user.profile_picture"
          :firstName="blog.user.first_name"
          :lastName="blog.user.last_name"
          :title="blog.title"
          :postedDate="blog.created_at"
          :totalLikes="blog.total_likes"
        ></travisor-blog-card>
      </v-col>
    </div>

    <!-- Top Destinations -->
    <travisor-top-destinations></travisor-top-destinations>
  </v-container>
</template>

<script>
import { useBlogStore } from "~/store/blog"; // Adjust path if needed

export default {
  data() {
    return {
      selectedOption: "latest",
      slides: [
        {
          image: "/images/blog.png",
          title: "BLOG POSTS",
          description: "Share your travel experience with us!",
        },
      ],
    };
  },
  computed: {
    blogs() {
      const blogStore = useBlogStore();
      return blogStore.blogs; // Access the blogs from the Pinia store
    },
  },
  mounted() {
    const blogStore = useBlogStore();
    blogStore.fetchBlogs(); // Fetch blogs when the component is mounted
  },
};
</script>
