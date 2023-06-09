import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TropicalParadise from "@/views/TropicalParadise.vue";
import OliveGarden from "@/views/OliveGarden.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/tropical",
    name: "tropical",
    component: TropicalParadise,
  },
  {
    path: "/olivegarden",
    name: "olivegarden",
    component: OliveGarden,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
