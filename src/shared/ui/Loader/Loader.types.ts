import type { HTMLAttributes } from 'vue';

type TLoaderColor = 'primary' | 'secondary';

export interface ILoaderProps {
  className: HTMLAttributes['class'];
  color?: TLoaderColor;
}
