<script setup lang="ts">
import { ref, computed } from 'vue';
import './components/TodoForm.vue'
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
import type { Todo } from './types';
import type { FilterType } from './types';

// Variáveis reativas 
const msg = ref('Todo List');
const todos = ref<Todo[]>([]);
const filter = ref<FilterType>('all');

// Computed properties para calcular o total de tarefas feitas e a lista filtrada
const totalDone = computed(() => todos
  .value
  .reduce((total, todo) => todo.done ? total + 1 : total, 0));

const filteredTodos = computed(() => {
  switch(filter.value) {
    case 'todo':
      return todos.value.filter(todo => !todo.done);
    case 'done':
      return todos.value.filter(todo => todo.done);
    default:
      return todos.value;
  }
})

// Funções para os eventos emitidos pelos componentes filhos
const addTodo = (newTodo: string) => {
  todos.value.push({
    id: crypto.randomUUID(),
    title: newTodo,
    done: false
  });
}

const toggleTodo = (id: string) => {
  const todo = todos.value.find(t => t.id === id);
  if (todo) {
    todo.done = !todo.done;
  }
}

const deleteTodo = (id: string) => {
  todos.value = todos.value.filter(t => t.id !== id);
}

</script>

<template>
  <div class="container">
    <h1 class="title">{{ msg }}</h1>
    <TodoForm @add-todo="addTodo"/>
    <div class="sub-content">
      <h3 v-if="!todos.length" class="subtitle">Crie uma atividade para começar!</h3>
      <h3 v-else class="subtitle">{{ totalDone }} / {{ todos.length }} atividades feitas.</h3>
      <div v-if="todos.length" class="button-container">
        <button :class="{'selected': filter === 'all'}" @click="filter = 'all'">Todos</button>
        <button :class="{'selected': filter === 'todo'}" @click="filter = 'todo'">Pendente</button>
        <button :class="{'selected': filter === 'done'}" @click="filter = 'done'">Feito</button>
      </div>
    </div>
    <TodoList :todos="filteredTodos" @toggle-done="toggleTodo" @delete-todo="deleteTodo"/>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.title {
  color: #ff9d00;
  font-size: 3.5rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(135deg, #ff9d00 0%, #ffd700 50%, #ff9d00 100%);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 10px rgba(255, 157, 0, 0.3);
  margin-bottom: 1rem;
  margin-top: 0.5rem;
}

.sub-content {
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.8rem;
}

.subtitle {
  color: rgba(255, 255, 255, 0.6);
}

.button-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.button-container button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  background: none;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-container button:hover {
  color: #ff9d00ba;
  border-color: #ff9d00b0;
  transform: translateY(-2px);
}

.button-container button.selected {
  color: #ff9d00ba;
  border-color: #ff9d00b0;
}

</style>
