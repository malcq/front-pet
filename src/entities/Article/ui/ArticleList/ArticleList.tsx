import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import {
  AutoSizer, List, ListRowProps, WindowScroller,
} from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
	className?: string;
	articles: Article[];
	isLoading?: boolean;
	target?: HTMLAttributeAnchorTarget;
	view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target,
  } = props;
  const { t } = useTranslation('articles');

  const isBig = view === ArticleView.BIG;

  const itemsPerRow = isBig ? 1 : 4;
  const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const rowRenderer = ({
    index, isScrolling, key, style,
  }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          article={articles[index]}
          view={view}
          className={cls.card}
          target={target}
          key={`str+${i}`}
        />,
      );
    }

    return (
      <div
        key={key}
        style={style}
        className={cls.row}
      >
        {items}
      </div>
    );
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('notFound')} />
      </div>
    );
  }

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        height,
        width,
        registerChild,
        scrollTop,
        isScrolling,
        onChildScroll,
      }) => (
        <div
          ref={registerChild}
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
          <List
            height={height ?? 700}
            rowCount={rowCount}
            rowHeight={isBig ? 700 : 330}
            rowRenderer={rowRenderer}
            width={width ? width - 80 : 700}
            autoHeight
            onScroll={onChildScroll}
            isScrolling={isScrolling}
            scrollTop={scrollTop}
          />
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>

  );
});
