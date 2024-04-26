<script setup lang="ts">
import { routes } from "@/router/routes";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const selectedKeys = ref(["/"]);
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<template>
  <div id="global-header">
    <a-menu
      mode="horizontal"
      :selected-keys="selectedKeys"
      @menu-item-click="doMenuClick"
    >
      <a-menu-item
        key="0"
        :style="{ padding: 0, marginRight: '38px' }"
        disabled
      >
        <img class="-logo" src="@/assets/bi-logo.svg" alt="" />
      </a-menu-item>
      <a-menu-item v-for="item in routes" :key="item.path">{{
        item.name
      }}</a-menu-item>
    </a-menu>
  </div>
</template>

<style scoped>
.-logo {
  height: 48px;
}
</style>
