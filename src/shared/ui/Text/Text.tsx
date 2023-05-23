import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextVariant {
	PRIMARY = 'primary',
	ERROR = 'error'
}

interface TextProps {
	className?: string;
	title?: string;
	text?: string;
	textVariant?: TextVariant;
}

export const Text = ({
  className,
  title,
  text,
  textVariant = TextVariant.PRIMARY,
}: TextProps) => {
  console.log(textVariant);

  return (
    <div className={classNames(cls.Text, {}, [className, cls[textVariant]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
