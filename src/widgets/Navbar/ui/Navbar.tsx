import { classNames } from 'shared/lib/classNames/classNames';
import { AppLinkTheme, Applink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Applink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={cls.mainLink}
        >
          {t('navbar.mainPage')}
        </Applink>
        <Applink theme={AppLinkTheme.RED} to={RoutePath.about}>
          {t('navbar.about')}
        </Applink>
      </div>
    </div>
  );
};
