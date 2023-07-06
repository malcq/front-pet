import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonVariant } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
	className?: string;
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation('article-details');
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(getRouteArticles());
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(getRouteArticleEdit(`${article?.id}`));
  }, [navigate, article?.id]);

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Button
        variant={ButtonVariant.OUTLINE}
        onClick={onBackToList}
      >
        {t('backToList')}
      </Button>
      {canEdit && (
        <Button
          variant={ButtonVariant.OUTLINE}
          onClick={onEditArticle}
        >
          {t('edit')}
        </Button>
      )}
    </HStack>
  );
});
