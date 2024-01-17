<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import type { ITodoItem } from '@/shared/types/todo';
import { Page } from '@/widgets/Page';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Todo } from '@/components/Todo';

const input = ref('');
const inputRef = ref();
const todos = ref<ITodoItem[]>([]);

const { t } = useI18n();

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

<template>
  <Page>
    <div class="todolist">
      <div class="form">
        <Input
          ref="inputRef"
          type="text"
          v-model="input"
          :placeholder="t('forms.placeholders.newTodo')"
        />
        <Button :disabled="!input" @click="addClickHandler" size="s" fluid centered>
          {{ t('forms.buttons.add') }}
        </Button>
      </div>
      <div v-if="!todos.length">
        <p class="text">{{ t('pages.todolist.empty') }}</p>
      </div>
      <TransitionGroup class="todos" tag="div" name="todos">
        <Todo
          class="todo"
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @remove="removeTodoHandler"
          @done="doneTodoHandler"
        />
      </TransitionGroup>
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

.todos-enter-active,
.todos-leave-active {
  transition: all 0.5s ease;
}

.todos-enter-from,
.todos-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
