import { memo } from 'react';

import { ArticlesFilters } from '@/widgets/ArticlesFilters';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer = memo(({ className }: FiltersContainerProps) => {
  const {
    onChangeSort,
    onChangeType,
    sort,
    order,
    search,
    type,
    onChangeOrder,
    onChangeSearch,
  } = useArticleFilters();
  return (
    <ArticlesFilters
      onChangeSort={onChangeSort}
      className={className}
      onChangeType={onChangeType}
      onChangeOrder={onChangeOrder}
      onChangeSearch={onChangeSearch}
      sort={sort}
      order={order}
      search={search}
      type={type}
    />
  );
});
