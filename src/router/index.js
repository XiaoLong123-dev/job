import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/shujuku",
    name: "全息数据库",
    component: () => import("@/views/quanxishujuku"),
  },
  {
    path: "/",
    component: () => import("@/views/Home"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
