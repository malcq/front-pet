import { Fragment, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import cls from './DropDownMenu.module.scss';
import { AppLink } from '../AppLink/AppLink';

export interface DropDownItem {
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

const mapDirectionClass: Record<DropdownDirection, string> = {
  'top right': cls.optionsTopRight,
  'top left': cls.optionsTopLeft,
  'bottom right': cls.optionsBottomRight,
  'bottom left': cls.optionsBottomLeft,
};

export function DropDownMenu(props: DropDownMenuProps) {
  const {
    className,
    trigger,
    items,
    direction = 'bottom right',
  } = props;

  const menuClasses = [
    mapDirectionClass[direction],
  ];

  return (
    <Menu
      as="div"
      className={classNames(cls.DropDownMenu, {}, [className])}
    >
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              className={classNames(cls.item, { [cls.active]: active })}
              onClick={item.onClick}
              disabled={item.disabled}
            >
              {item.content}
            </button>
          );
          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }
          return (
            <Menu.Item as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}

      </Menu.Items>
    </Menu>
  );
}
