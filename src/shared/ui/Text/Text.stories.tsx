import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextVariant } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryText: Story = {};
PrimaryText.args = {
  title: 'title text',
  text: 'text primary lorem ipsum',
};

export const OnlyTitle: Story = {};
OnlyTitle.args = {
  title: 'title text',
};

export const OnlyText: Story = {};
OnlyText.args = {
  text: 'text primary lorem ipsum',
};

export const PrimaryTextDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
PrimaryTextDark.args = {
  title: 'title text',
  text: 'text primary lorem ipsum',
};

export const OnlyTitleDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
OnlyTitleDark.args = {
  title: 'title text',
};

export const OnlyTextDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
OnlyTextDark.args = {
  text: 'text primary lorem ipsum',
};

export const Error: Story = {};
Error.args = {
  title: 'title text',
  text: 'text primary lorem ipsum',
  textVariant: TextVariant.ERROR,
};

export const SizeL: Story = {};
SizeL.args = {
  title: 'title text',
  text: 'text primary lorem ipsum',
  size: TextSize.L,
};

export const SizeM: Story = {};
SizeM.args = {
  title: 'title text',
  text: 'text primary lorem ipsum',
  size: TextSize.M,
};

export const SizeS: Story = {};
SizeS.args = {
  title: 'title text',
  text: 'text primary lorem ipsum',
  size: TextSize.S,
};
