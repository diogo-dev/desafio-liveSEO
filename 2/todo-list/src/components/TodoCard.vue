<script setup lang="ts">
import type { Todo } from '../types';

  const props = defineProps<{
    todo: Todo
  }>();

  const emit = defineEmits<{
    toggleDone: [id: string];
    deleteTodo: [id: string];
  }>();

  const handleDelete = () => {
    emit('deleteTodo', props.todo.id);
  }

</script>

<template>
  <div class="todo-card">
    <div class="card-content">
      <input type="checkbox" @input="emit('toggleDone', props.todo.id)" :checked="props.todo.done"/>
      <p :class="{ done: props.todo.done }">{{ props.todo.title }}</p>
    </div>

    <button class="delete-btn" @click="handleDelete">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 6h18"></path>
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
      </svg>
    </button>
    
  </div>
</template>

<style scoped>  
.todo-card {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border: 2px solid rgba(255, 157, 0, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(255, 157, 0, 0.1);
}

.todo-card:hover {
  border-color: rgba(255, 157, 0, 0.5);
  box-shadow: 0 4px 16px rgba(255, 157, 0, 0.2);
  transform: translateY(-2px);
}

.todo-card input[type="checkbox"] {
  width: 20px;
  height: 20px; 
  cursor: pointer;
  accent-color: #ff9d00;
}

.todo-card p {
  margin: 0;
  text-align: left;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  flex: 1;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.trash-icon {
  cursor: pointer;
  color: rgba(255, 157, 0, 0.6);
  transition: all 0.3s ease;
}

.delete-btn {
  background: rgba(255, 157, 0, 0.2);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
}

.delete-btn svg {
  stroke: rgba(255, 157, 0, 0.6);
  transition: all 0.3s ease;
}

.delete-btn:hover svg {
  stroke: #ffd500;
}

.done {
  text-decoration: line-through;
}
</style>