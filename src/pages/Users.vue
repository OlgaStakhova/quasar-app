<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>Contacts</q-toolbar-title>
    </q-toolbar>

    <q-list bordered>
      <q-item
        v-for="user in users"
        :key="user.id"
        class="q-my-sm"
        clickable
        @click="openUser(user)"
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.name[0] }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
          <q-item-label caption lines="1">{{ user.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" color="green" />
        </q-item-section>
      </q-item>

      <q-separator />
    </q-list>

    <q-dialog
      v-model="dialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-teal text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">{{ user.username }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p>Fullname: {{ user.name }}</p>
          <p>
            Tel:
            <a href="tel:{{ user.phone }}"> {{ user.phone }} </a>
          </p>
          <p>
            Email: <a href="mailto:{{user.email}}"> {{ user.email }}</a>
          </p>

          <p>
            Website:
            <a href="http://www.{{ user.website }}" target="_blank">
              {{ user.website }}
            </a>
          </p>
        </q-card-section>
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { computed } from "vue";
import { useUsersStore } from "../stores/userData.js";

export default {
  name: "Users",
  data() {
    return {
      dialog: false,
    };
  },
  setup() {
    const store = useUsersStore();
    const users = computed(() => store.users);
    return {
      users,
    };
  },

  created() {
    const store = useUsersStore();
    store.getUsersData();
  },
  methods: {
    openUser(user) {
      this.user = user;
      this.dialog = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
