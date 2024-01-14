<script setup lang="ts">
import { type IButtonProps } from './Button.types';
withDefaults(defineProps<IButtonProps>(), {
  size: 'm',
  color: 'primary',
  variant: 'filled'
});
</script>
<template>
  <button :class="['btn', color, size, variant, className, { centered, fluid }]"><slot /></button>
</template>
<style scoped lang="scss">
.btn {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  border-radius: 100px;
  width: fit-content;
  transition:
    ease 0.1s transform,
    ease 0.2s color,
    ease 0.2s background-color,
    ease 0.2s border-color;
  outline: 0;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):active {
    transform: translateY(2px);
  }

  &.fluid {
    width: 100%;
  }

  &.centered {
    justify-content: center;
  }

  &:not(.unstyled).m {
    height: 50px;
    padding: 10px 24px;
    font: var(--font-m);

    @media screen and (max-width: 1024px) {
      font: var(--font-s);
    }
  }
  &:not(.unstyled).s {
    height: 40px;
    padding: 4px 24px;
    font: var(--font-s);
  }

  &.filled {
    &.primary {
      color: var(--secondary-color);
      background-color: var(--button-bg);
      border: 1px solid var(--button-bg);
    }
    &.inverted-primary {
      color: var(--primary-color);
      background-color: var(--inverted-primary-color);
      border: 1px solid var(--inverted-primary-color);
    }
    &.orange {
      color: var(--inverted-primary-color);
      background-color: var(--orange-light);
      border: 1px solid var(--orange-light);
    }
  }
  &.border {
    &.primary {
      color: var(--button-bg);
      background-color: transparent;
      border: 1px solid var(--button-bg);
    }
    &.inverted-primary {
      color: var(--inverted-primary-color);
      background-color: transparent;
      border: 1px solid var(--inverted-primary-color);
    }
    &.orange {
      color: var(--orange-light);
      background-color: transparent;
      border: 1px solid var(--orange-light);
    }
  }
}
</style>
