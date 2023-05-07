/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLinkTheme, AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        variant={ButtonVariant.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('signIn')}
      </Button>

      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        asdasdasd asdasdasdasdasdasdasdasdasdasdasdasd

      </Modal>
    </div>
  );
};
