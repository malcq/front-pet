import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextVariant {
	PRIMARY = 'primary',
	ERROR = 'error'
}

export enum TextAlign {
	RIGHT = 'right',
	CENTER = 'center',
	LEFT = 'left',
}
interface TextProps {
	className?: string;
	title?: string;
	text?: string;
	textVariant?: TextVariant;
	align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    textVariant = TextVariant.PRIMARY,
    align = TextAlign.LEFT,
  } = props;

  return (
    <div className={classNames(cls.Text, {}, [className, cls[textVariant], cls[align]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
