import { ReactNode } from 'react';

import { Popover as HPopover } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import cls from './Popover.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupsCls from '../../styles/popups.module.scss';

interface PopoverProps {
	className?: string;
	direction?: DropdownDirection;
	trigger?: ReactNode;
	children: ReactNode
}

export function Popover(props: PopoverProps) {
  const {
    className,
    trigger,
    children,
    direction = 'bottom right',
  } = props;
  const menuClasses = [
    mapDirectionClass[direction],
  ];
  return (
    <HPopover
      className={classNames(cls.Popover, {}, [className, popupsCls.popup])}
    >
      <HPopover.Button
        as="div"
        className={popupsCls.trigger}
      >
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
}
