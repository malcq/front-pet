import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextVariant {
	PRIMARY = 'primary',
	INVERTED = 'inverted',
	ERROR = 'error'
}

export enum TextAlign {
	RIGHT = 'right',
	CENTER = 'center',
	LEFT = 'left',
}

export enum TextSize {
	S = 'size_s',
	M = 'size_m',
	L = 'size_l',
}
interface TextProps {
	className?: string;
	title?: string;
	text?: string;
	textVariant?: TextVariant;
	align?: TextAlign;
	size?: TextSize;
}

type HeaderTag = 'h1' | 'h2'| 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',

};

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    textVariant = TextVariant.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  const classes = [
    className,
    cls[textVariant],
    cls[align],
    cls[size],
  ];

  return (
    <div className={classNames(cls.Text, {}, classes)}>
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
