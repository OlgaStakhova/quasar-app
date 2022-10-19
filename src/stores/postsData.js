import { defineStore } from "pinia";
import { api } from "boot/axios";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [],
  }),
  actions: {
    getPostsData() {
      api
        .get("/posts")
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => console.log(error, "error"));
    },
  },
});
