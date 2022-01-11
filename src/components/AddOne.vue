<script setup lang="ts">
import { Ref, ref } from 'vue';
import addIcon from "../assets/add.svg";

const dialogVisible:Ref = ref(false)

function newTodoItem() {
  dialogVisible.value = true
}
</script>

<template>
  <a class="add-icon" @click="newTodoItem">
    <img :src="addIcon" />
  </a>
  <div class="dialog" v-show="dialogVisible"></div>
</template>

<style scoped>
.add-icon {
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 10vh;
  right: 3vw;
  z-index: 1;
}

.add-icon img {
  width: 100%;
  height: 100%;
}
</style>