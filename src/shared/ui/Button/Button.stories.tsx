/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonVariant } from './Button';
/* import 'app/styles/index.scss';
 */
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};
Primary.args = {
  children: 'primary',
};

export const Clear: Story = {};
Clear.args = {
  variant: ButtonVariant.CLEAR,
  children: 'clear',
};

export const ClearInverted: Story = {};
ClearInverted.args = {
  variant: ButtonVariant.CLEAR_INVERTED,
  children: 'clear intverted',
};

export const Outline: Story = {};
Outline.args = {
  variant: ButtonVariant.OUTLINE,
  children: 'Outline',
};

export const OutlineDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

OutlineDark.args = {
  variant: ButtonVariant.OUTLINE,
  children: 'OutlineDark',
};

export const BackgroundTheme: Story = {};
BackgroundTheme.args = {
  variant: ButtonVariant.BACKGROUND,
  children: 'BackgroundTheme',
};

export const BackgroundInverted: Story = {};
BackgroundInverted.args = {
  variant: ButtonVariant.BACKGROUND_INVERTED,
  children: 'Background inverted',
};

export const Square: Story = {};
Square.args = {
  variant: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
  children: '>',
};

export const SquareSizeL: Story = {};
SquareSizeL.args = {
  variant: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
  children: '>',
};

export const SquareSizeXL: Story = {};
SquareSizeL.args = {
  variant: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
  children: '>',
};

export const OutlineSize: Story = {};
OutlineSize.args = {
  variant: ButtonVariant.OUTLINE,
  size: ButtonSize.M,
  children: 'Text',
};

export const OutlineSizeL: Story = {};
OutlineSizeL.args = {
  variant: ButtonVariant.OUTLINE,
  size: ButtonSize.L,
  children: 'Text',
};

export const OutlineSizeXL: Story = {};
OutlineSizeXL.args = {
  variant: ButtonVariant.OUTLINE,
  size: ButtonSize.XL,
  children: 'Text',
};
