import { HTMLAttributes, ReactNode, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardVariant {
	NORMAL = 'normal',
	OUTLINED = 'outlined'
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	cardVariant?: CardVariant;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    cardVariant = CardVariant.NORMAL,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.Card, {}, [className, cls[cardVariant]])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
