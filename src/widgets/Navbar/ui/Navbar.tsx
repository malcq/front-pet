import { memo, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  getUserAuthData,
} from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropDown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Button, ButtonVariant } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextVariant } from '@/shared/ui/Text';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('navbar.nameApp')}
          textVariant={TextVariant.INVERTED}
        />
        <AppLink
          className={cls.createBtn}
          to={getRouteArticleCreate()}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('navbar.createArticle')}
        </AppLink>
        <HStack gap="16" className={cls.actions}>

          <NotificationButton />
          <AvatarDropDown />
        </HStack>

      </header>
    );
  }
  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        variant={ButtonVariant.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('signIn')}
      </Button>

      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </header>
  );
});
