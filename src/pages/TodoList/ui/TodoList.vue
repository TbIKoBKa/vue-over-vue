<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { ITodoItem } from '@/shared/types/todo';
import { Page } from '@/widgets/Page';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Todo } from '@/components/Todo';

const input = ref('');
const inputRef = ref();
const todos = ref<ITodoItem[]>([]);

onMounted(() => {
  inputRef.value?.inputRef.focus?.();
});

const addClickHandler = () => {
  todos.value.push({
    id: new Date().getTime(),
    title: input.value,
    done: false
  });

  input.value = '';
  inputRef.value?.inputRef.focus?.();
};

const removeTodoHandler = (todo: ITodoItem) => {
  todos.value = todos.value.filter((t) => t !== todo);
};

const doneTodoHandler = (todo: ITodoItem) => {
  todo.done = !todo.done;
};
</script>

<template lang="">
  <Page>
    <div class="todolist">
      <div class="form">
        <Input ref="inputRef" type="text" v-model="input" placeholder="Enter new Todo" />
        <Button :disabled="!input" @click="addClickHandler" size="s" fluid centered>Add</Button>
      </div>
      <div class="todos">
        <div v-if="!todos.length">
          <p class="text">List is empty</p>
        </div>
        <Todo
          class="todo"
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @remove="removeTodoHandler"
          @done="doneTodoHandler"
        />
      </div>
    </div>
  </Page>
</template>

<style scoped lang="scss">
.todolist {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.text {
  text-align: center;
}

.todos {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>