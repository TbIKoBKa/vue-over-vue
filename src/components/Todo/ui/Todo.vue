<script setup lang="ts">
import type { ITodoProps, ITodoEmits } from '../types/todo';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
const { todo } = defineProps<ITodoProps>();
const emit = defineEmits<ITodoEmits>();

const onRemove = () => {
  emit('remove', todo);
};
const onDone = () => {
  emit('done', todo);
};
</script>

<template>
  <div class="todo">
    <Button
      :class-name="['todo-toggler', { done: todo.done }]"
      variant="unstyled"
      @click="onDone"
      size="s"
    />
    <div class="todo-body">
      <Text>{{ todo.title }}</Text>
    </div>
    <Button @click="onRemove" size="s">Remove</Button>
  </div>
</template>

<style scoped lang="scss">
.todo {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
}

.todo-toggler {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  padding: 0;
  background-color: var(--orange-light);
  border: 0;
  outline: 0;

  &.done {
    background-color: var(--green-dark);
  }
}

.todo-body {
  display: flex;
  align-items: center;
  flex: 1;
  min-height: 40px;
  border: 1px solid var(--primary-color);
  border-radius: 999px;
  padding: 0 16px;
}
</style>
