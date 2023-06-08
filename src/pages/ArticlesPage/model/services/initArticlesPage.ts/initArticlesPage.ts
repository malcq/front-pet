import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';
import {
  getArticlesPageInited,
} from '../../selectors/articlesPageSelector';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<
	void,
	URLSearchParams,
	ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      searchParams.forEach((value, key) => {
        // eslint-disable-next-line default-case
        switch (key) {
        case 'order': dispatch(articlesPageActions.setOrder(value as SortOrder));
          break;
        case 'sort': dispatch(articlesPageActions.setSort(value as ArticleSortField));
          break;
        case 'search': dispatch(articlesPageActions.setSearch(value));
          break;
        case 'type': dispatch(articlesPageActions.setType(value as ArticleType));
          break;
        }
      });

      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({}));
    }
  },
);
