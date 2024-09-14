<template>
  <div>
    <!-- Banner -->
    <travisor-banner
      :slides="slides"
      :image="slides[0].image"
    ></travisor-banner>

    <!-- Blog Details -->
    <travisor-blog-details></travisor-blog-details>

    <!-- Top Destinations -->
    <travisor-top-destinations></travisor-top-destinations>
  </div>
</template>

<script>
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
};
</script>

<style></style>
