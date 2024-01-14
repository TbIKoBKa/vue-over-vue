import { type ButtonHTMLAttributes } from 'vue';

export type TButtonSize = 'm' | 's';
export type TButtonColor = 'primary' | 'inverted-primary' | 'orange';
export type TButtonVariant = 'filled' | 'border' | 'unstyled';

export interface IButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  className?: ButtonHTMLAttributes['class'];
  size?: TButtonSize;
  color?: TButtonColor;
  variant?: TButtonVariant;
  fluid?: boolean;
  centered?: boolean;
}
