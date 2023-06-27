import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
	className?: string;
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
  return (
    <Popover
      direction="bottom left"
      trigger={(
        <Button variant={ButtonVariant.CLEAR}>
          <Icon Svg={NotificationIcon} inverted />
        </Button>
      )}
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});
