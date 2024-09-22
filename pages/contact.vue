<template>
  <v-container fluid class="contact-page accent">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="pa-5 my-16">
          <!-- Contact Form Header -->
          <v-card-title class="text-center">
            <span class="contact-title">CONTACT FORM</span>
          </v-card-title>

          <!-- Contact Form -->
          <v-form @submit.prevent="submitForm">
            <v-text-field
              label="Full Name"
              v-model="contactForm.name"
              outlined
              dense
              required
            ></v-text-field>

            <v-text-field
              label="Phone"
              v-model="contactForm.phone"
              outlined
              dense
              required
            ></v-text-field>

            <v-text-field
              label="Email"
              v-model="contactForm.email"
              outlined
              dense
              required
            ></v-text-field>

            <v-textarea
              label="Message"
              v-model="contactForm.message"
              outlined
              dense
              rows="4"
              required
            ></v-textarea>

            <!-- Submit Button -->
            <v-btn color="orange" class="submit-btn mt-4" type="submit">
              Submit
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useMessageStore } from "~/store/message"; // Import your store
import Swal from "sweetalert2"; // Import SweetAlert2

export default {
  data() {
    return {
      contactForm: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    async submitForm() {
      const messageStore = useMessageStore(); // Access the store

      // Prepare the data to be stored
      const messageData = {
        name: this.contactForm.name,
        phone: this.contactForm.phone,
        email: this.contactForm.email,
        message: this.contactForm.message,
      };

      try {
        // Store the message using the store's action
        await messageStore.storeMessage(messageData);
        console.log("Form submitted:", messageData);

        // Show success message using SweetAlert2
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been successfully sent.",
          confirmButtonText: "Okay",
        });

        // Reset the form after submission
        this.resetForm();
      } catch (error) {
        console.error("Error storing message:", error);
        // Optionally, show an error message
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again later.",
        });
      }
    },
    resetForm() {
      this.contactForm = {
        name: "",
        phone: "",
        email: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
.contact-page {
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-title {
  font-size: 24px;
  font-weight: bold;
}

.submit-btn {
  width: 100%;
  color: white;
}
</style>
