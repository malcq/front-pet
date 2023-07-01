import type { Meta, StoryObj } from '@storybook/react';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleRating> = {
  title: 'features/articleRating',
  component: ArticleRating,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Primary: Story = {
  decorators: [StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  })],
};
Primary.args = {
  articleId: '1',
};

Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 4,
        },
      ],
    },
  ],
};

export const WithoutRating: Story = {
  decorators: [StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  })],
};
WithoutRating.args = {
  articleId: '1',
};

WithoutRating.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};
