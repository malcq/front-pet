import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {};
Primary.args = {
  comments: [
    {
      id: '1',
      text: 'helloworld',
      user: { id: '1', username: 'Vasya' },
    },
    {
      id: '2',
      text: 'comment 2',
      user: { id: '2', username: 'Petya' },
    },
  ],
};

export const Loading: Story = {};
Loading.args = {
  comments: [],
  isLoading: true,
};
