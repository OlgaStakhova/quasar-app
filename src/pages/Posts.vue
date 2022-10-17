<template>
  <q-page class="flex flex-center">
    <h1>POSTS</h1>
    <q-list bordered separator>
      <q-item
        clickable
        v-ripple
        v-for="post in posts"
        :key="post.id"
        @click="openPost(post)"
      >
        <q-item-section>
          <q-item-label overline>{{ post.title }}</q-item-label>
          <q-item-label>{{ post.body }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar
            icon="boy"
            color="primary"
            text-color="white"
            style="margin-right: 15px"
          />
          <p class="text-h6">{{ post.title }}</p>
          <span class="q-ml-sm">{{ post.body }}</span>
        </q-card-section>

        <!-- Notice v-close-popup -->
        <q-card-actions align="right">
          <q-btn
            flat
            label="Cancel"
            color="primary"
            v-close-popup="cancelEnabled"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { api } from "boot/axios";
export default {
  name: "Posts",
  data() {
    return {
      posts: [],
      dialog: false,
      post: null,
    };
  },
  created() {
    api
      .get("/posts")
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => console.log(error, "error"));
  },
  methods: {
    openPost(p) {
      this.post = p;
      this.dialog = true;
    },
  },
};
</script>

<style scoped></style>
