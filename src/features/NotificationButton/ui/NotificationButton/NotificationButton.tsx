import { memo, useCallback, useState } from 'react';

import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Button, ButtonVariant } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
	className?: string;
}

/*
	Установили либу react-device-detect - весит 12кб, многовато для такой фичи.
 	Лучше сделать кастомный хук useDevice.
	Но если по идее нужно подгружать через lazy разные компоненты в чанки,
	то наверное нужна либа(погуглить lazyLoad с хуком useDevice)
*/
export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useDevice();

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button onClick={onOpenDrawer} variant={ButtonVariant.CLEAR}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  return (
    <div>

      {isMobile ? (
        <div>
          {trigger}
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
        </div>

      ) : (
        <Popover
          direction="bottom left"
          trigger={trigger}
        >
          <NotificationList className={cls.notifications} />
        </Popover>

      ) }
      {/* <BrowserView renderWithFragment>
        <Popover
          direction="bottom left"
          trigger={trigger}
        >
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView renderWithFragment>
        {trigger}
					<Drawer isOpen={isOpen} onClose={onCloseDrawer}>
						<NotificationList />
					</Drawer>
      </MobileView> */}
    </div>

  );
});
