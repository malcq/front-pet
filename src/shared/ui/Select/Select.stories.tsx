import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.args = {
  label: 'Select',
  options: [
    { value: '123', content: 'first option' },
    { value: '345', content: 'second option' },
  ],
};
