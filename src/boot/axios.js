import axios from "axios";
import { boot } from "quasar/wrappers";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { axios, api };
