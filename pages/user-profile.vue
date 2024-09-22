<template>
  <v-container class="profile-page" fluid>
    <!-- Profile Image and Upload Button -->
    <v-row justify="center">
      <v-col cols="12" md="6" class="text-center">
        <v-avatar size="100">
          <img
            :src="
              user?.profile_picture || '/images/default-profile-picture.PNG'
            "
            alt="Profile Image"
          />
        </v-avatar>
      </v-col>
    </v-row>

    <!-- Personal Information Section -->
    <v-row justify="center" class="mt-5">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title class="text-h5 d-flex justify-space-between">
            <span>Personal Info</span>
            <v-btn icon @click="editProfile">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>First Name</v-list-item-title>
                  <v-list-item-subtitle>{{
                    user.first_name
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Last Name</v-list-item-title>
                  <v-list-item-subtitle>{{
                    user.last_name
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Username</v-list-item-title>
                  <v-list-item-subtitle>{{
                    user.username
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Email</v-list-item-title>
                  <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Phone</v-list-item-title>
                  <v-list-item-subtitle>{{ user.phone }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Gender</v-list-item-title>
                  <v-list-item-subtitle>{{
                    user.gender || "Not specified"
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Logout Button -->
      <v-col cols="12" md="8" class="text-right mt-4">
        <v-btn color="secondary" @click="logout">Logout</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useAuthStore } from "~/store/auth";

export default {
  computed: {
    user() {
      return localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null;
    },
  },
  mounted() {
    // Initialize the store in the mounted hook
    this.authStore = useAuthStore();
  },
  methods: {
    uploadPhoto() {
      alert("Upload photo clicked!");
    },

    editProfile() {
      alert("Edit profile clicked!");
    },

    async logout() {
      const authStore = useAuthStore(this.$pinia);
      try {
        await authStore.logout();
        this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.error;
      }
    },
  },
};
</script>

<style scoped>
.profile-page {
  padding-top: 20px;
}
</style>
