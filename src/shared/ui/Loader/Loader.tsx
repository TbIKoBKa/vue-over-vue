import { FC, memo } from 'react';
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
    <div className={classNames([cls['lds-ellipsis'], cls[color], className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
});
