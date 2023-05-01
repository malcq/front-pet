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
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    children: 'Text',
  },
  /*  decorators: [ThemeDecorator(Theme.LIGHT)], */
};

export const Clear: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    children: 'Text',
    variant: VariantButton.CLEAR,
  },
  /*  decorators: [ThemeDecorator(Theme.LIGHT)], */
};

export const Outline: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    children: 'Text',
    variant: VariantButton.OUTLINE,
  },
  /*  decorators: [ThemeDecorator(Theme.LIGHT)], */
};

export const OutlineDark: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    children: 'Text',
    variant: VariantButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
