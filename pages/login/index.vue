<template>
  <v-container class="login-page-container pa-0 ma-0 primary" fluid>
    <div class="d-flex flex-row align-center justify-center pa-10 primary">
      <!-- Left Section: Welcome Message -->
      <!-- <v-col
        cols="12"
        md="6"
        class="left-section d-flex flex-column justify-center align-center pa-0 ma-0"
      >
        <div class="welcome-content text-center">
          <h1 class="font-weight-bold">Welcome to...</h1>
          <p class="welcome-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </v-col> -->

      <!-- Right Section: Login Form -->
      <v-col
        cols="12"
        md="6"
        class="right-section d-flex flex-column justify-center align-center"
      >
        <v-card class="pa-8 login-card">
          <h2 class="font-weight-bold text-center mb-5">Login</h2>
          <p class="text-center grey--text">
            Welcome! Login to get amazing discounts and offers only for you.
          </p>
          <v-form ref="loginForm" v-model="isFormValid" class="mb-4">
            <!-- Email -->
            <v-text-field
              label="Email"
              v-model="email"
              :rules="[rules.required, rules.email]"
              outlined
            ></v-text-field>

            <!-- Password -->
            <v-text-field
              label="Password"
              v-model="password"
              :rules="[rules.required, rules.password]"
              outlined
              type="password"
            ></v-text-field>

            <!-- Remember me -->
            <v-checkbox
              v-model="rememberMe"
              label="Remember me"
              class="mt-4"
            ></v-checkbox>

            <!-- Submit Button -->
            <v-btn
              :disabled="!isFormValid"
              color="primary"
              block
              @click="loginUser"
            >
              Login
            </v-btn>
          </v-form>

          <!-- Links -->
          <div class="d-flex justify-space-between">
            <a href="#" class="blue--text">New User? Signup</a>
            <a href="#" class="blue--text">Forgot your password?</a>
          </div>
        </v-card>
      </v-col>
    </div>
  </v-container>
</template>

<script>
import { useAuthStore } from "@/store/auth"; // Adjust based on your store location
import Swal from "sweetalert2"; // Import SweetAlert

export default {
  data() {
    return {
      isFormValid: false,
      email: "",
      password: "",
      rememberMe: false,
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => /.+@.+\..+/.test(value) || "Email must be valid.",
        password: (value) =>
          value.length >= 6 || "Password must be at least 6 characters.",
      },
    };
  },
  computed: {
    authStore() {
      return useAuthStore();
    },
  },
  methods: {
    async loginUser() {
      if (this.$refs.loginForm.validate()) {
        try {
          console.log(this.email, this.password);
          await this.authStore.login(this.email, this.password);

          this.$router.push("/");
        } catch (error) {
          Swal.fire({
            title: "Login Failed",
            text:
              error.response?.data?.message ||
              "Invalid credentials or something went wrong. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.login-page-container {
  /* height: 100vh; */
  /* background: linear-gradient(135deg, #5a00ff, #f4931e); */
}

.left-section {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.welcome-content {
  max-width: 80%;
  /* color: white; */
}

.welcome-text {
  font-size: 18px;
}

.right-section {
  /* background-color: white; */
}

.login-card {
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
}

.blue--text {
  color: #007bff !important;
}

.v-text-field {
  margin-bottom: 20px;
}
</style>
