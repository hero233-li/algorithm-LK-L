<script setup lang="ts">
import SingleFile from "@/components/FileUpload/singleFile.vue";
</script>

<template>
  <div
    id="file-upload"
    :style="{
      display: 'flex',
      width: '100%',
      boxSizing: 'border-box',
      padding: '40px',
      backgroundColor: 'var(--color-fill-2)',
    }"
  >
    <single-file />
  </div>
</template>

<style scoped></style>
