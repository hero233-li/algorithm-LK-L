<template>
  <div id="single-file">
    <a-card :style="{ width: '360px' }" title="单文件上传" :bordered="false">
      <a-space direction="horizontal" id="-aSpace">
        <input
          type="file"
          id="-uploadFile"
          ref="fileInput"
          @change="handleFileChange"
        />
        <a-button type="primary" status="success" @click="openFileInput"
          >上传</a-button
        >
        <a-button type="primary" status="success" @click="submitFile"
          >提交</a-button
        >
      </a-space>
      <div style="display: flex; align-items: center; justify-content: center">
        <span style="flex: 1">{{ fileName }}</span>
        <a-progress
          type="circle"
          size="small"
          :percent="percent"
          v-if="fileName"
        />
      </div>
    </a-card>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
const fileInput = ref();
let fileObj = null;
let percent = ref(0);
let fileName = ref(null);
const openFileInput = () => {
  fileInput.value.click();
};
const handleFileChange = (e) => {
  fileObj = e.target.files[0];
  fileName.value = fileObj.name;
};
const submitFile = async () => {
  let FileSize = fileObj.size;
  let size = 1024 * 1024;
  let current = 0;
  percent.value = 0;
  while (current < fileObj.size) {
    let _fromData = new FormData();
    _fromData.append(fileObj.name, fileObj.slice(current, current + size));
    await axios.post("http://localhost:4000/postUpload");
    FileSize > size
      ? (percent.value = Math.min(100, Math.round((current / FileSize) * 10)))
      : (percent.value = 100);
    current += size;
  }
};
</script>
<style scoped>
#-aSpace {
  position: absolute;
  left: 0;
  margin-top: -50px;
}
#-uploadFile {
  visibility: hidden;
  width: 200px;
  height: 0;
}
</style>
