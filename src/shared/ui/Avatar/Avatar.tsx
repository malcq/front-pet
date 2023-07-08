import { CSSProperties, useMemo } from 'react';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';
import UserIcon from '../../assets/icons/default-avatar.svg';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
	className?: string;
	src?: string;
	alt?: string;
	size?: number;
	fallbackInverted?: boolean;
}

export const Avatar = ({
  className,
  src,
  alt,
  size = 100,
  fallbackInverted,
}: AvatarProps) => {
  const mods: Mods = {};
  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />;

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
    />
  );
};
