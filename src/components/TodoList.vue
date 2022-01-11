<script setup lang="ts">
import { ref } from 'vue';
import store from '../store';
import TodoItem from './TodoItem.vue';

const todoList = ref(store.state.todoList)
</script>

<template>
  <div v-for="(item, index) in todoList" :key="index">
    <TodoItem :title="item.title" :goal="item.goal" :time="item.time" />
  </div>
</template>