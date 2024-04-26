<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<template>
  <div id="base-layout">
    <a-layout>
      <a-layout-header id="header"><global-header /></a-layout-header>
      <a-layout-content id="content"><router-view /></a-layout-content>
      <a-layout-footer id="footer">手写代码</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#base-layout #header {
  margin-bottom: 16px;
}
#content {
  margin-bottom: 16px;
}
#footer {
  background-color: #1d1f1e;
  color: #a9a9ac;
  position: absolute;
  padding: 16px;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
