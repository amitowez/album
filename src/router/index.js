import Vue from "vue";
import VueRouter from "vue-router";
// import { component } from "vue/types/umd";
import main from "../pages/MainPage";
import photos from "../pages/PhotosPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: main
  },
  {
    path: "/photo",
    name: "photo",
    component: photos
  }
];

const router = new VueRouter({
  routes
});

export default router;
