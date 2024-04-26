<template>
  <div id="app">
    <base-layouts />
  </div>
</template>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup lang="ts">
import BaseLayouts from "@/layouts/BaseLayouts.vue";
</script>
