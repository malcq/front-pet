import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ArticleEditForm.module.scss';

interface ArticleEditFormProps {
	className?: string;
}

export const ArticleEditForm = memo(({ className }: ArticleEditFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleEditForm, {}, [className])}>
      {t('language')}
    </div>
  );
});
