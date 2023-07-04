import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Avatar } from './Avatar';
import AvatarImg from './avatar.jpg';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.args = {
  src: AvatarImg,
  size: 150,
};

export const Small: Story = {};

Small.args = {
  src: AvatarImg,
  size: 50,
};
