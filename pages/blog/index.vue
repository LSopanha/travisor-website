<template>
  <v-container class="pa-0" fluid>
    <!-- Banner -->
    <travisor-banner
      :slides="slides"
      :title="slides[0].title"
      :description="slides[0].description"
      :image="slides[0].image"
    ></travisor-banner>

    <!-- Selcted Options -->
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
          :image="blog.image"
          :profile_picture="blog.profile_picture"
          :userName="blog.user_name"
          :title="blog.title"
          :postedDate="blog.posted_date"
          :totalLikes="blog.total_likes"
        ></travisor-blog-card>
      </v-col>
    </div>

    <!-- Top Destinations -->
    <travisor-top-destinations></travisor-top-destinations>
  </v-container>
</template>

<script>
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
      blogs: [
        {
          image: "/images/blog.png",
          profile_picture: "/images/default-profile-picture.PNG",
          user_name: "Leavchum Sopanha",
          title: "BLOG POST 1",
          posted_date: "July 26, 2024",
          total_likes: 10,
        },
        {
          image: "/images/blog.png",
          profile_picture: "/images/default-profile-picture.PNG",
          user_name: "Leavchum Sopanha",
          title: "BLOG POST 2",
          posted_date: "July 26, 2024",
          total_likes: 10,
        },
        {
          image: "/images/blog.png",
          profile_picture: "/images/default-profile-picture.PNG",
          user_name: "Leavchum Sopanha",
          title: "BLOG POST 3",
          posted_date: "July 26, 2024",
          total_likes: 10,
        },
        {
          image: "/images/blog.png",
          profile_picture: "/images/default-profile-picture.PNG",
          user_name: "Leavchum Sopanha",
          title: "BLOG POST 4",
          posted_date: "July 26, 2024",
          total_likes: 10,
        },
        {
          image: "/images/blog.png",
          profile_picture: "/images/default-profile-picture.PNG",
          user_name: "Leavchum Sopanha",
          title: "BLOG POST 5",
          posted_date: "July 26, 2024",
          total_likes: 10,
        },
      ],
    };
  },
};
</script>
