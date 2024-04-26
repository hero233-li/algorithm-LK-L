import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "首页",
    component: HomeView,
  },
  {
    path: "/fileUpload",
    name: "文件上传",

    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/FileUpload.vue"),
  },
];
