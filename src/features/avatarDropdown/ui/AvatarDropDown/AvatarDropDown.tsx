import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropDownMenu } from 'shared/ui/Popups';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface AvatarDropDownProps {
	className?: string;
}

export const AvatarDropDown = memo(({ className }: AvatarDropDownProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onLogOut = useCallback(() => {
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <DropDownMenu
      className={classNames('', {}, [className])}
      direction="bottom left"
      items={[
        ...(isAdminPanelAvailable ? [{
          id: t('navbar.admin'),
          content: t('navbar.admin'),
          href: RoutePath.admin_panel,
        }] : []),
        {
          id: t('navbar.profile'),
          content: t('navbar.profile'),
          href: RoutePath.profile + authData.id,
        },
        {
          id: t('signOut'),
          content: t('signOut'),
          onClick: onLogOut,
        },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  );
});
