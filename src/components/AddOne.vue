<script setup lang="ts">
import { Ref, ref } from 'vue';
import addIcon from "../assets/add.svg";
import store from '../store';
import TodoItem, { defaultValue as originTodoItem } from "../interfaces/todoItem"

const dialogVisible: Ref = ref(false)
const toAddItem: Ref = ref(originTodoItem)

function newTodoItem() {
  dialogVisible.value = true
}

function confirmAdd(e: any) {
  e.preventDefault()
  store.dispatch('AddItem', toAddItem.value)
  cancelAdd()
}

function cancelAdd() {
  dialogVisible.value = false
  toAddItem.value = originTodoItem
}
</script>

<template>
  <a class="add-icon" @click="newTodoItem">
    <img :src="addIcon" />
  </a>
  <div class="dialog" v-show="dialogVisible">
    添加任务？
    <form @submit="confirmAdd">
      任务名称：
      <input type="text" v-model.value="toAddItem.title" />
      目标：
      <input type="number" v-model.value="toAddItem.goal" />个
      一次
      <input type="number" v-model.value="toAddItem.time" />分钟
      <button type="submit">Y</button>
      <button type="button" @click="cancelAdd">N</button>
    </form>
  </div>
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