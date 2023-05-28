import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation(['profile', 'translation']);
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
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text
        title={t('profile:profilePage')}
      />
      {readonly ? (
        <Button
          className={cls.editBtn}
          variant={ButtonVariant.OUTLINE}
          onClick={onEdit}
        >
          {t('profile:edit')}
        </Button>
      )
        : (
          <>
            <Button
              className={cls.cancelBtn}
              variant={ButtonVariant.OUTLINE_RED}
              onClick={onCancelEdit}
            >
              {t('translation:cancel')}
            </Button>
            <Button
              className={cls.saveBtn}
              variant={ButtonVariant.OUTLINE}
              onClick={onSave}
            >
              {t('translation:save')}
            </Button>
          </>

        )}
    </div>
  );
};
