import { classNames } from 'shared/lib/classNames';
import cls from './Navbar.module.scss';
import { AppLinkTheme, Applink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <Applink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={cls.mainLink}
        >
          Главная
        </Applink>
        <Applink theme={AppLinkTheme.RED} to={RoutePath.about}>
          О сайте
        </Applink>
      </div>
    </div>
  );
};
