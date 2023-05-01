import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {

  args: {
    children: 'Primary',
    theme: AppLinkTheme.SECONDARY,
  },
};

export const Secondary: Story = {

  args: {
    children: 'Secondary',
    theme: AppLinkTheme.SECONDARY,
  },
};

export const Red: Story = {
  args: {
    children: 'Red',
    theme: AppLinkTheme.RED,
  },
};

export const PrimaryOnDark: Story = {
  args: {
    children: 'PrimaryOnDark',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryOnDark: Story = {
  args: {
    children: 'SecondaryOnDark',
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedOnDark: Story = {
  args: {
    children: 'RedOnDark',
    theme: AppLinkTheme.RED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
