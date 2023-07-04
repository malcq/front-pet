import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { StarRating } from '@/shared/ui/StarRating';
import { RatingCard } from '@/entities/Rating';

const MainPage = memo(() => {
  const { t } = useTranslation('main');
  return (
    <Page>
      {t('mainPage')}
    </Page>
  );
});

export default MainPage;
