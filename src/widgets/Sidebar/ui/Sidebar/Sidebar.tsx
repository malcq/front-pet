import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t } = useTranslation();
  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };
  return (
    <div
      // eslint-disable-next-line react/no-unknown-property
      date-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <Button
        // eslint-disable-next-line react/no-unknown-property, i18next/no-literal-string
        date-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        className={cls.collapseBtn}
        variant={ButtonVariant.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>

        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={cls.item}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>
            {t('navbar.mainPage')}
          </span>
        </AppLink>

        <AppLink theme={AppLinkTheme.RED} to={RoutePath.about} className={cls.item}>
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>
            {t('navbar.about')}
          </span>
        </AppLink>

      </div>
      <div className={cls.switchers}>

        <ThemeSwitcher />
        <LangSwitcher short={isCollapsed} className={cls.lang} />
      </div>
    </div>
  );
};
