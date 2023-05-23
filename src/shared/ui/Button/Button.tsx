import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonVariant {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
	disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant,
    square,
    size,
    disabled,
    ...otherProps
  } = props;
  const mods: Record<string, boolean> = {
    [cls[variant]]: true,
    [cls.square]: square,
    [cls.disabled]: disabled,
  };
  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[variant], cls[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
