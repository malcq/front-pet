import { rtkApi } from 'shared/api/rtkApi';

const recommenadtionsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query({
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
        method: 'POSt',
      }),
    }),
  }),
});

export const useArticleRecommendationsList = recommenadtionsApi.useGetArticleRecommendationsListQuery;
export const useCreateRecommendation = recommenadtionsApi.useCreateArticleRecommendationMutation;
