import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleInfiniteList } from './ArticleInfiniteList';

const meta: Meta<typeof ArticleInfiniteList> = {
  title: 'pages/Article/ArticleInfiniteList',
  component: ArticleInfiniteList,
};

export default meta;
type Story = StoryObj<typeof ArticleInfiniteList>;

export const Primary: Story = {
  decorators: [StoreDecorator({})],
};

Primary.args = {

};
