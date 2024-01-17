export interface IModalProps {
  open: boolean;
  title?: string;
}

export interface IModalEmits {
  (e: 'close'): void;
}
