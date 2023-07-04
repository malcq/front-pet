import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {};
Primary.args = {
  comment: {
    id: '1',
    text: 'helloworld',
    user: { id: '1', username: 'Vasya' },
  },
};

export const Loading: Story = {};
Loading.args = {
  isLoading: true,
};
