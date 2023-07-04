import { Fragment, ReactNode } from 'react';

import { Menu } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import cls from './DropDownMenu.module.scss';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupsCls from '../../styles/popups.module.scss';

export interface DropDownItem {
	id: string;
	disabled?: boolean;
	content?: ReactNode;
	onClick?: () => void;
	href?: string;
}
interface DropDownMenuProps {
	className?: string;
	items: DropDownItem[];
	direction?: DropdownDirection;
	trigger?: ReactNode;
}

export function DropDownMenu(props: DropDownMenuProps) {
  const {
    className,
    items,
    trigger,
    direction = 'bottom right',
  } = props;

  const menuClasses = [
    mapDirectionClass[direction],
  ];

  return (
    <Menu
      as="div"
      className={classNames(cls.DropDownMenu, {}, [className, popupsCls.popup])}
    >
      <Menu.Button className={popupsCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              className={classNames(cls.item, { [popupsCls.active]: active })}
              onClick={item.onClick}
              disabled={item.disabled}
            >
              {item.content}
            </button>
          );
          if (item.href) {
            return (
              <Menu.Item
                key={`dropdown-key${index}`}
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          }
          return (
            <Menu.Item
              key={`dropdown-key${index}`}
              as={Fragment}
              disabled={item.disabled}
            >
              {content}
            </Menu.Item>
          );
        })}

      </Menu.Items>
    </Menu>
  );
}
