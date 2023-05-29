import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
	item?: SidebarItemType;
	isCollapsed: boolean;
}

export const SidebarItem = ({ item, isCollapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item?.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item?.path || ''}
      className={classNames(cls.item, { [cls.collapsed]: isCollapsed })}
    >
      {item && <item.Icon className={cls.icon} />}
      <span className={cls.link}>
        {t(item?.text || '')}
      </span>
    </AppLink>
  );
};