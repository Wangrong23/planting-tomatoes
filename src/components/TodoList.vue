<script setup lang="ts">
import { ref } from 'vue';
import store from '../store';
import TodoItem from './TodoItem.vue';

const todoList = ref(store.state.todoList)
</script>

<template>
  <div class="todo-list">
    <div class="todo-item" v-for="(item, index) in todoList" :key="index">
      <TodoItem :title="item.title" :goal="item.goal" :time="item.time" />
    </div>
  </div>
</template>

<style scoped>
.todo-list {
  height: 100%;
  display: grid;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.todo-item {
  margin: 10px 0;
}
</style>