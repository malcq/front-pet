import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import cls from './Sidebar.module.scss';
import { SidebarItem } from './SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t } = useTranslation();
  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => SidebarItemsList.map((item) => (
    <SidebarItem
      item={item}
      isCollapsed={isCollapsed}
      key={item.path}
    />
  )), [isCollapsed]);

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
        {itemsList}
      </div>
      <div className={cls.switchers}>

        <ThemeSwitcher />
        <LangSwitcher short={isCollapsed} className={cls.lang} />
      </div>
    </div>
  );
});
