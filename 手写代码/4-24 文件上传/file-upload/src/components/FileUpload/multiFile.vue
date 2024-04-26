<template>
  <div id="multi-file">
    <a-card :style="{ width: '360px' }" title="多文件上传" :bordered="false">
      <a-space direction="horizontal" id="-aSpace">
        <input
          type="file"
          id="-uploadFile"
          ref="fileInput"
          @change="handleFileChange"
          multiple
        />
        <a-button type="primary" status="success" @click="openFileInput"
          >上传</a-button
        >
        <a-button type="primary" status="success" @click="submitFile"
          >提交</a-button
        >
      </a-space>
      <div
        style="display: flex; align-items: center; justify-content: center"
        v-for="item in fileArr"
        :key="item"
      >
        <span style="flex: 1">{{ item?.name }}</span>
        <a-progress
          type="circle"
          size="small"
          :percent="percent"
          v-if="item?.name"
        />
      </div>
    </a-card>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import { createLogger } from "vuex";
const fileInput = ref();
let fileObj = null;
let percent = ref(0);
let fileArr = reactive([]);
const openFileInput = () => {
  fileInput.value.click();
};
const handleFileChange = (e) => {
  if (e.target.files.length > 1) {
    for (const file of e.target.files) {
      fileArr.push(file);
    }
  } else {
    fileArr.push(e.target.files[0]);
  }
};
const submitFile = async () => {
  for (const item of fileArr) {
    let FileSize = item?.size;
    let size = 1024 * 1024;
    let current = 0;
    percent.value = 0;
    while (current < item?.size) {
      let _fromData = new FormData();
      _fromData.append(item?.name, item?.slice(current, current + size));
      await axios.post("http://localhost:4000/postUpload");
      FileSize > size
        ? (percent.value = Math.min(100, Math.round((current / FileSize) * 10)))
        : (percent.value = 100);
      current += size;
    }
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
