<script setup lang="ts">
interface TodoItemInc {
  title: string,
  time: number, //The time to harvest a tomato
  goal: number, //Want to harvest the number of tomatoes
}

import TodoItem from "../interfaces/todoItem"

defineProps<TodoItemInc>()
</script>

<template>
  <div class="content">
    <div>
      <p>{{ title }}</p>
      <p>目标：{{goal}}个 一次{{time}}分钟</p>
    </div>
    <div>
      <button>开始</button>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px #cccccc;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 9px;
  background-color: antiquewhite;
}
</style>