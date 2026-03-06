<script setup lang="ts">
import type { Todo } from '../types';
import TodoCard from './TodoCard.vue';

  const props = defineProps<{
    todos: Todo[]
  }>();

  const emit = defineEmits<{
    toggleDone: [id: string];
    deleteTodo: [id: string];
  }>();

</script>

<template>
  <div class="todo-list">
    <div v-for="todo in props.todos" :key="todo.id" class="list">
      <TodoCard :todo="todo" @toggle-done="emit('toggleDone', todo.id)" @delete-todo="emit('deleteTodo', todo.id)"/>
    </div>
  </div>
</template>

<style scoped>  
.todo-list {
  width: 50vw;
  max-height: 40vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 4rem;
  padding-top: 0.5rem;
}

</style>