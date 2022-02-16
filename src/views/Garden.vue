<script lang="ts" setup>
import TodoList from '../components/TodoList.vue';
import AddOne from '../components/AddOne.vue';
</script>

<template>
  <div class="garden-wrapper">
    <TodoList />
  </div>
  <AddOne />
</template>

<style scoped>
.garden-wrapper {
  height: 100%;
}
</style>