import type { Meta, StoryObj } from '@storybook/react';
import { ArticleEditForm } from './ArticleEditForm';

const meta: Meta<typeof ArticleEditForm> = {
  title: 'features/ArticleEditForm/ArticleEditForm',
  component: ArticleEditForm,
};

export default meta;
type Story = StoryObj<typeof ArticleEditForm>;

export const Primary: Story = {};
Primary.args = {

};
