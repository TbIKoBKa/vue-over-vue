<!-- import { FC, memo } from 'react';
import classNames from 'classnames';

import cls from './Loader.module.scss';

type TLoaderColor = 'primary' | 'secondary';

interface ILoaderProps {
  className?: string;
  color?: TLoaderColor;
}

export const Loader: FC<ILoaderProps> = memo((props) => {
  const { className, color = 'primary' } = props;

  return (
    
  );
}); -->

<script setup lang="ts">
import { type ILoaderProps } from './Loader.types';
withDefaults(defineProps<ILoaderProps>(), {
  color: 'primary'
});
</script>
<template>
  <div :class="['lds-ellipsis', color, className]">
    <div />
    <div />
    <div />
    <div />
  </div>
</template>
<style scoped lang="scss">
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  &.primary div {
    background: var(--inverted-bg-color);
  }

  &.secondary div {
    background: var(--secondary-bg-color);
  }

  & div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }

  & div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  & div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  & div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(24px, 0);
  }
}
</style>
