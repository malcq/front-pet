import { classNames } from 'shared/lib/classNames/classNames';
import { AppLinkTheme, Applink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.navbar, {}, [className])}>
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
