import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const defaultReducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  return (
    <DynamicModuleLoader reducers={defaultReducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        {t('profilePage')}
      </div>
    </DynamicModuleLoader>

  );
});

export default ProfilePage;
