export type TTextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
export type TTextSize = 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs' | 'xxxs';
export type TTextColor =
  | 'primary'
  | 'secondary'
  | 'inverted-primary'
  | 'gray-dark'
  | 'green-dark'
  | 'orange-dark';
export type TTextWeight = 'normal' | 'medium' | 'bold' | 'bolder';

export interface ITextProps {
  className?: string;
  element?: TTextElement;
  size?: TTextSize;
  color?: TTextColor;
  weight?: TTextWeight;
  centered?: boolean;
  underline?: boolean;
}
