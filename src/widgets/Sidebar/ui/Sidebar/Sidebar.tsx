import { classNames } from 'shared/lib/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* LangSwitcher */}
      </div>
    </div>
  );
};
