<script setup lang="ts">
import SingleFile from "@/components/FileUpload/singleFile.vue";
import MultiFile from "@/components/FileUpload/multiFile.vue";
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
    <multi-file />
  </div>
</template>

<style scoped></style>
