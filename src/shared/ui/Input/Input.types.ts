import { type InputHTMLAttributes } from 'vue';

export interface IInputProps extends /* @vue-ignore */ InputHTMLAttributes {
  modelValue: string;
  label?: string;
  error?: string;
}
