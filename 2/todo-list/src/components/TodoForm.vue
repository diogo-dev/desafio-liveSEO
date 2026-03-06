<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  addTodo: [newTodo: string]
}>();

const newTodo = ref('');

const handleFormSubmit = () => {
  // prevenção contra envio do form vazio
  if (newTodo.value.trim()) {
    // emitir o event para o componente pai e depois limpar seu valor
    emit("addTodo", newTodo.value.trim());
    newTodo.value = '';
  }
}

</script>

<template>
  <form @submit.prevent="handleFormSubmit" class="form-container">
      <label for="todo-input" class="input-label">Nova atividade:</label>
      <input 
        id="todo-input" 
        type="text" 
        placeholder="Adicione aqui a nova atividade" 
        class="todo-input"
        v-model="newTodo"
        required
      >
      <div class="btn-container">
        <button class="btn-add">
          Add
        </button>
      </div>
    </form>
</template>

<style scoped>
.input-label {
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
  margin-left: 8px;
}

.form-container {
  display: flex;
  flex-direction: column;
}

.btn-container {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}

.todo-input {
  width: 50vw;
  padding: 16px 18px;
  font-size: 15px;
  border: 2px solid rgba(0, 0, 0, 0.4);
  color: rgb(255, 255, 255);
  box-sizing: border-box;
  outline: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.todo-input::placeholder {
  color: #666;
  opacity: 1;
}

.btn-add {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #000000;
  background: linear-gradient(135deg, #ff9d00 0%, #ffd700 50%, #ff9d00 100%);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-add:hover {
  transform: translateY(-2px);
}

.btn-add:active {
  transform: translateY(0);
}
</style>