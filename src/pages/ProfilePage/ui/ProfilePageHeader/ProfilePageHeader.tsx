import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation(['profile', 'translation']);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Text
        title={t('profile:profilePage')}
      />
      {canEdit && (
        <div>
          {readonly ? (
            <Button
              variant={ButtonVariant.OUTLINE}
              onClick={onEdit}
            >
              {t('profile:edit')}
            </Button>
          )
            : (
              <HStack gap="8">
                <Button
                  variant={ButtonVariant.OUTLINE_RED}
                  onClick={onCancelEdit}
                >
                  {t('translation:cancel')}
                </Button>
                <Button
                  variant={ButtonVariant.OUTLINE}
                  onClick={onSave}
                >
                  {t('translation:save')}
                </Button>
              </HStack>

            )}
        </div>
      )}

    </HStack>
  );
};
