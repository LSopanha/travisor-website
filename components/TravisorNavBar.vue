<template>
  <v-row
    class="d-flex align-center justify-space-between pl-0 pr-16"
    style="width: 100vw; margin: 0"
  >
    <v-col cols="2" class="d-flex align-center">
      <v-img
        src="/images/travisor-logo.png"
        alt="Logo"
        max-width="170"
        class="mr-4"
      ></v-img>
    </v-col>

    <v-col cols="auto" class="d-flex justify-center pa-0">
      <template v-for="item in menuItems">
        <!-- Home, Blog, About, Contact Us -->
        <v-btn
          v-if="!item.dropdown"
          :key="item.label"
          :to="item.path"
          class="black--text pa-0 px-8 mx-1"
          text
          height="60"
          exact
          active-class="active-button"
        >
          {{ item.label }}
        </v-btn>

        <!-- Destinations Dropdown -->
        <v-menu v-else offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :key="item.label"
              class="black--text px-8"
              v-bind="attrs"
              v-on="on"
              text
              height="60"
              :class="{ 'active-button': isDestinationsActive() }"
            >
              {{ item.label }}
            </v-btn>
          </template>
          <v-list>
            <!-- List of 7 Destination Items with Query Parameters -->
            <v-list-item
              v-for="dest in item.destinations"
              :key="dest.label"
              :to="{
                path: '/destinations',
                query: { region: dest.queryRegion },
              }"
              exact
              active-class="active-button"
            >
              <v-list-item-title>{{ dest.label }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-col>

    <v-col cols="2" class="d-flex justify-end pa-0" v-if="isLoggedIn">
      <v-btn to="/user-profile" icon @click="handleUserProfileClick">
        <v-img
          :src="
            userProfilePicture
              ? userProfilePicture
              : '/images/default-profile-picture.PNG'
          "
          class="rounded-circle"
          style="aspect-ratio: 1; border: 2px solid blue"
          :max-width="45"
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
      </v-btn>
    </v-col>

    <v-col cols="2" class="d-flex flex-row justify-end pa-0" v-else>
      <v-btn
        class="mx-1"
        outlined
        :to="{
          path: '/login',
        }"
        >LOG IN</v-btn
      >
      <v-btn
        class="primary white--text mx-1"
        text
        :to="{
          path: '/register',
        }"
        >REGISTER</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
import { useAuthStore } from "~/store/auth";

export default {
  data() {
    return {
      menuItems: [
        { label: "Home", path: "/", name: "home" },
        { label: "Blog", path: "/blog", name: "blog" },
        {
          label: "Destinations",
          path: "/destinations",
          name: "destinations",
          // dropdown: true,
          // destinations: [
          //   { label: "Europe", queryRegion: "Europe" },
          //   { label: "Asia", queryRegion: "Asia" },
          //   { label: "Africa", queryRegion: "Africa" },
          //   { label: "Americas", queryRegion: "Americas" },
          //   { label: "Australia", queryRegion: "Australia" },
          //   { label: "Antarctica", queryRegion: "Antarctica" },
          //   { label: "Oceania", queryRegion: "Oceania" },
          // ],
        },
        { label: "About", path: "/about", name: "about" },
        { label: "Contact Us", path: "/contact", name: "contact" },
      ],
      userProfilePicture: "",
    };
  },
  computed: {
    isLoggedIn() {
      const authStore = useAuthStore();
      return authStore.isAuthenticated;
    },
  },
  mounted() {
    if (this.isLoggedIn) {
      this.fetchUserProfile();
    }
  },

  methods: {
    handleUserProfileClick() {
      // this.isUserProfileRoute = true;
    },
    handleRegisterClick() {
      // this.isUserProfileRoute = true;
    },
    isActive(item) {
      return (
        this.$route.path === item.path ||
        (item.destinations &&
          item.destinations.some(
            (dest) => dest.queryRegion === this.$route.query.region
          ))
      );
    },
    fetchUserProfile() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        this.userProfilePicture = user.profile_picture;
      }
    },
  },
};
</script>

<style scoped>
.v-row {
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

.v-toolbar {
  padding: 0 !important;
}

.v-toolbar__content,
.v-toolbar__extension {
  padding: 0 !important;
}

.v-img {
  cursor: pointer;
}

.v-btn {
  font-weight: 500;
}

.active-button {
  color: #1bbc9b !important;
}

body.drawer-open {
  overflow: hidden;
}
</style>
