import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from '@/shared/const/theme';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {};
Primary.args = {
  width: '100%',
  height: 200,
};

export const Circle: Story = {};
Circle.args = {
  border: '50%',
  width: 100,
  height: 100,
};

export const PrimaryOnDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
PrimaryOnDark.args = {
  width: '100%',
  height: 200,
};

export const CircleOnDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
CircleOnDark.args = {
  border: '50%',
  width: 100,
  height: 100,
};
