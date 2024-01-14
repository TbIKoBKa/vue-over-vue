<script setup lang="ts">
import { computed } from 'vue';
import { type ITextProps } from './Text.types';
const { className, color, size, weight, centered, underline } = withDefaults(
  defineProps<ITextProps>(),
  {
    color: 'primary',
    size: 'l',
    element: 'p',
    weight: 'medium',
    centered: false,
    className: '',
    underline: false
  }
);

const classes = computed(() => ['root', color, size, weight, className, { centered, underline }]);
</script>
<template>
  <component :is="element" :class="classes"><slot /></component>
</template>
<style scoped lang="scss">
.root {
  color: var(--primary-color);

  &.xxl {
    font: var(--font-xxl);
    font-weight: 700;
  }
  &.xl {
    font: var(--font-xl);
    font-weight: 700;
  }
  &.l {
    font: var(--font-l);
    font-weight: 700;
  }
  &.m {
    font: var(--font-m);
  }
  &.s {
    font: var(--font-s);
  }
  &.xs {
    font: var(--font-xs);
  }
  &.xxs {
    font: var(--font-xxs);
  }
  &.xxxs {
    font: var(--font-xxxs);
  }

  &.primary {
    color: var(--primary-color);
  }
  &.secondary {
    color: var(--secondary-color);
  }
  &.inverted-primary {
    color: var(--inverted-primary-color);
  }
  &.gray-dark {
    color: var(--gray-dark);
  }
  &.green-dark {
    color: var(--green-dark);
  }
  &.orange-dark {
    color: var(--orange-dark);
  }

  &.underline {
    text-decoration: underline;
  }
  &.centered {
    text-align: center;
  }

  &.bolder {
    font-weight: 700;
  }
  &.bold {
    font-weight: 600;
  }
  &.medium {
    font-weight: 500;
  }
  &.normal {
    font-weight: 400;
  }
}
</style>
