<script setup lang="ts">
import { ref } from 'vue';
import { type IInputProps } from './Input.types';
import { Text } from '../Text';
defineProps<IInputProps>();
defineOptions({
  inheritAttrs: false
});

const inputRef = ref<HTMLInputElement | null>();

defineExpose({
  inputRef
});
</script>
<template>
  <div class="input-root">
    <label class="label">
      <Text v-if="label">{{ label }}</Text>
      <input
        ref="inputRef"
        v-bind="$attrs"
        class="input"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target?.value)"
      />
    </label>
    <Text v-if="error" size="m" color="orange-dark">{{ error }}</Text>
  </div>
</template>
<style scoped lang="scss">
.input-root {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.label {
  display: flex;
  flex-direction: column;
}

.input {
  border-radius: 12px;
  height: 40px;
  border: 1px solid var(--primary-color);
  outline: 0;
  padding: 4px 8px;

  &.error {
    border-color: var(--orange-dark);
  }
}
</style>
