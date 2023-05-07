/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  render: (args) => (
    <AppLink to="/" {...args} theme={AppLinkTheme.PRIMARY}>
      Primary
    </AppLink>
  ),
};

export const Secondary: Story = {

  render: (args) => (
    <AppLink to="/" {...args} theme={AppLinkTheme.SECONDARY}>
      Secondary
    </AppLink>
  ),
};

export const Red: Story = {
  render: (args) => (
    <AppLink to="/" {...args} theme={AppLinkTheme.RED}>
      Red
    </AppLink>
  ),
};

export const PrimaryOnDark: Story = {
  render: (args) => (
    <AppLink to="/" {...args} theme={AppLinkTheme.PRIMARY}>
      Primary
    </AppLink>
  ),
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryOnDark: Story = {
  render: (args) => (
    <AppLink to="/" {...args} theme={AppLinkTheme.SECONDARY}>
      Primary
    </AppLink>
  ),
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedOnDark: Story = {
  render: (args) => (
    <AppLink to="/" {...args} theme={AppLinkTheme.RED}>
      Primary
    </AppLink>
  ),
  decorators: [ThemeDecorator(Theme.DARK)],
};
