import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,

};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  decorators: [StoreDecorator({})],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const AuthNavbar: Story = {
  decorators: [StoreDecorator({
    user: { authData: {} },
  })],
};
