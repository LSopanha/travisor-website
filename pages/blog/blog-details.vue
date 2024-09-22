<template>
  <div>
    <!-- Banner -->
    <travisor-banner
      :slides="slides"
      :image="slides[0].image"
    ></travisor-banner>

    <!-- Blog Details (Pass individual blog data to the child) -->
    <travisor-blog-details
      v-if="blog"
      :title="blog.title"
      :authorFirstName="blog.user?.first_name"
      :authorLastName="blog.user?.last_name"
      :createdAt="blog.created_at"
      :likes="blog.likes"
      :text="blog.text"
    >
    </travisor-blog-details>

    <!-- Top Destinations -->
    <travisor-top-destinations></travisor-top-destinations>
  </div>
</template>

<script>
import { useBlogStore } from "~/store/blog";

export default {
  data() {
    return {
      slides: [
        {
          image: "/images/blog.png",
        },
      ],
    };
  },
  computed: {
    blog() {
      const blogStore = useBlogStore();
      return blogStore.blog; // Access the blogs from the Pinia store
    },
  },
  mounted() {
    const blogId = this.$route.query.blogId;
    console.log("Blog ID:", blogId); // Log the blog ID
    const blogStore = useBlogStore();
    blogStore.fetchBlogById(blogId);
  },
};
</script>

<style></style>
