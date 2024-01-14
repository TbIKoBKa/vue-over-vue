import type { ITodoItem } from '@/shared/types/todo';

export interface ITodoProps {
  todo: ITodoItem;
}

export interface ITodoEmits {
  (e: 'remove', todo: ITodoItem): void;
  (e: 'done', todo: ITodoItem): void;
}
