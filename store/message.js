import { defineStore } from 'pinia';
import axios from 'axios';

export const useMessageStore = defineStore('message', {
  state: () => ({}),

  actions: {
    async storeMessage(messageData) {
      try {
         console.log(messageData);
        const response = await axios.post(`${process.env.publicApi}messages`, messageData); // Send the message data
        return response;
      } catch (error) {
        console.error("Error sending message:", error);
        throw error;
      }
    },
  },
});
