<template>
  <v-container class="pa-0 ma-0 form-container" fluid>
    <v-card class="py-10 my-10 mx-16 form-card">
      <h1 class="text-center secondary--text font-weight-bold">
        Register Form
      </h1>
      <p class="text-center black--text font-weight-regular mb-5">
        Join us to explore the best travel destinations!
      </p>
      <v-form ref="registrationForm" v-model="isFormValid">
        <!-- First Name -->
        <v-text-field
          label="First Name"
          v-model="authStore.userInfo.first_name"
          :rules="[rules.required]"
          outlined
        ></v-text-field>

        <!-- Last Name -->
        <v-text-field
          label="Last Name"
          v-model="authStore.userInfo.last_name"
          :rules="[rules.required]"
          outlined
        ></v-text-field>

        <!-- Username -->
        <v-text-field
          label="Username"
          v-model="authStore.userInfo.username"
          :rules="[rules.required]"
          outlined
        ></v-text-field>

        <!-- Phone Number -->
        <v-text-field
          label="Phone"
          v-model="authStore.userInfo.phone"
          :rules="[rules.required, rules.phone]"
          outlined
        ></v-text-field>

        <!-- Email -->
        <v-text-field
          label="Email"
          v-model="authStore.userInfo.email"
          :rules="[rules.required, rules.email]"
          outlined
        ></v-text-field>

        <!-- Password -->
        <v-text-field
          label="Password"
          v-model="authStore.userInfo.password"
          :rules="[rules.required, rules.password]"
          outlined
          type="password"
        ></v-text-field>

        <!-- Confirm Password -->
        <v-text-field
          label="Confirm Password"
          v-model="confirmPassword"
          :rules="[rules.required, confirmPasswordRule]"
          outlined
          type="password"
        ></v-text-field>

        <!-- Submit Button -->
        <v-btn :disabled="!isFormValid" color="primary" @click="registerUser">
          Register
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { useAuthStore } from "@/store/auth";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      isFormValid: false,
      confirmPassword: "",
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => /.+@.+\..+/.test(value) || "E-mail must be valid.",
        phone: (value) =>
          /^\d{9,12}$/.test(value) ||
          "Phone number must be valid (9-12 digits).",
        password: (value) =>
          value.length >= 6 || "Password must be at least 6 characters.",
      },
    };
  },
  computed: {
    authStore() {
      return useAuthStore();
    },
    confirmPasswordRule() {
      return (value) =>
        value === this.authStore.userInfo.password || "Passwords must match.";
    },
  },
  methods: {
    async registerUser() {
      if (
        this.$refs.registrationForm.validate() &&
        this.confirmPassword === this.authStore.userInfo.password
      ) {
        try {
          const userInfoToSend = { ...this.authStore.userInfo };
          delete userInfoToSend.password2;

          const response = await this.authStore.register(userInfoToSend);

          console.log(response);

          this.$router.push({
            name: "login",
          });
        } catch (error) {
          Swal.fire({
            title: "Registration Failed",
            text:
              error.response?.data?.message ||
              "Something went wrong. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } else {
        Swal.fire({
          title: "Passwords Mismatch",
          text: "Please make sure the passwords match!",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  background-color: #1bbc9b;
  /* background-image: url("/path/to/your/image.jpg"); */
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Full page height */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.form-card {
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
  margin: auto;
}

.v-form {
  max-width: 400px;
  margin: auto;
}
</style>
