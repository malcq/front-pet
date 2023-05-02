/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, VariantButton } from './Button';
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
      Primary!!
    </Button>
  ),
};

export const Clear: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  render: (args) => (
    <Button {...args} variant={VariantButton.CLEAR}>
      Primary!!
    </Button>
  ),
};

export const Outline: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  render: (args) => (
    <Button {...args} variant={VariantButton.OUTLINE}>
      Primary!!
    </Button>
  ),
};

export const OutlineDark: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  render: (args) => (
    <Button {...args} variant={VariantButton.OUTLINE}>
      Primary!!
    </Button>
  ),
  decorators: [ThemeDecorator(Theme.DARK)],
};
