import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { useTranslation } from 'react-i18next';
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

      {/* eslint-disable-next-line react/no-unknown-property */ }
      <button date-testid="sidebar-toggle" type="button" onClick={onToggle}>
        {t('toggle')}
      </button>
      <div className={cls.switchers}>

        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
