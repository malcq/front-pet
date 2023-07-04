import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {};

Primary.args = {
  children: 'Primary',
};

export const Secondary: Story = {};

Secondary.args = {
  children: 'Secondary',
  theme: AppLinkTheme.SECONDARY,
};

export const Red: Story = {};

Red.args = {
  children: 'Red',
  theme: AppLinkTheme.RED,
};

export const PrimaryOnDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

PrimaryOnDark.args = {
  children: 'Red',
  theme: AppLinkTheme.PRIMARY,
};

export const SecondaryOnDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

PrimaryOnDark.args = {
  children: 'Secondary',
  theme: AppLinkTheme.SECONDARY,
};

export const RedOnDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

RedOnDark.args = {
  children: 'RedOnDark',
  theme: AppLinkTheme.RED,
};
