<script setup lang="ts">
import type { IModalProps, IModalEmits } from './Modal.types';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { Cross } from '@/shared/ui/icons';

defineProps<IModalProps>();
const emit = defineEmits<IModalEmits>();

const onCloseHandler = () => emit('close');
</script>
<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="open" class="modal-backdrop" @mousedown.self="onCloseHandler">
        <div class="modal-root">
          <div class="modal-header">
            <Text size="xxl">{{ title }}</Text>
            <Button size="s" color="inverted-primary" icon @click="onCloseHandler">
              <Cross width="28" height="28" />
            </Button>
          </div>
          <div class="modal-body">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<style scoped lang="scss">
.modal-backdrop {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  background-color: var(--backdrop);
}

.modal-root {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 600px;
  max-height: 80vh;
  height: fit-content;
  background-color: var(--secondary-bg-color);
  border-radius: 16px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px 0;
}

.modal-body {
  padding: 0 30px 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
