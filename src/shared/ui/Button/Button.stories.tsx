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
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  render: (args) => (
    <Button {...args}>
      Primary
    </Button>
  ),
};

export const Clear: Story = {
  render: (args) => (
    <Button {...args} variant={ButtonVariant.CLEAR}>
      clear
    </Button>
  ),
};

export const Outline: Story = {
  render: (args) => (
    <Button {...args} variant={ButtonVariant.OUTLINE}>
      outline
    </Button>
  ),
};

export const OutlineDark: Story = {
  render: (args) => (
    <Button {...args} variant={ButtonVariant.OUTLINE}>
      Outline on dark
    </Button>
  ),
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundTheme: Story = {
  render: (args) => (
    <Button {...args} variant={ButtonVariant.BACKGROUND}>
      BackgroundTheme
    </Button>
  ),
};

export const BackgroundInverted: Story = {
  render: (args) => (
    <Button {...args} variant={ButtonVariant.BACKGROUND_INVERTED}>
      background inverted
    </Button>
  ),
};

export const square: Story = {
  render: (args) => (
    <Button {...args} variant={ButtonVariant.BACKGROUND_INVERTED} square>
      &gt;
    </Button>
  ),
};

export const squareSizeL: Story = {
  render: (args) => (
    <Button {...args} variant={ButtonVariant.BACKGROUND_INVERTED} square size={ButtonSize.L}>
      &gt;
    </Button>
  ),
};

export const squareSizeXL: Story = {
  render: (args) => (
    <Button {...args} variant={ButtonVariant.BACKGROUND_INVERTED} square size={ButtonSize.L}>
      &gt;
    </Button>
  ),
};
export const outlineSize: Story = {
  render: (args) => (
    <Button {...args} variant={ButtonVariant.OUTLINE} size={ButtonSize.M}>
      text
    </Button>
  ),
};

export const outlineSizeL: Story = {
  render: (args) => (
    <Button {...args} variant={ButtonVariant.OUTLINE} size={ButtonSize.L}>
      text
    </Button>
  ),
};

export const outlineSizeXL: Story = {
  render: (args) => (
    <Button {...args} variant={ButtonVariant.OUTLINE} size={ButtonSize.XL}>
      text
    </Button>
  ),
};
