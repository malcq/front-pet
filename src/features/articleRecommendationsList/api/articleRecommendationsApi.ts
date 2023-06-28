import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

const recommenadtionsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
    createArticleRecommendation: build.mutation({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
        method: 'POST',
      }),
    }),
  }),
});

export const useArticleRecommendationsList = recommenadtionsApi.useGetArticleRecommendationsListQuery;
export const useCreateRecommendation = recommenadtionsApi.useCreateArticleRecommendationMutation;
