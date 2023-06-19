import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component: ListBox,
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {};
Primary.args = {

};
