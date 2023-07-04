import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardVariant {
	NORMAL = 'normal',
	OUTLINED = 'outlined'
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	cardVariant?: CardVariant;
	max?: boolean;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    cardVariant = CardVariant.NORMAL,
    max,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.Card, { [cls.max]: max }, [className, cls[cardVariant]])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
