import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
  }),
  actions: {
    getUsersData() {
      api
        .get("/users")
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => console.log(error, "error"));
    },
  },
});
