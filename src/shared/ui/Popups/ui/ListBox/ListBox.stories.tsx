import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component: ListBox,
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Normal: Story = {};
Normal.args = {
  value: '321',
  items: [
    {
      content: 'asdasd23', value: '321',
    },
    {
      content: 'qwe', value: '456',
    },
  ],
};

export const TopLeft: Story = {};
TopLeft.args = {
  direction: 'top left',
  value: '321',
  items: [
    {
      content: 'asdasd23', value: '321',
    },
    {
      content: 'qwe', value: '456',
    },
  ],
};

export const TopRight: Story = {};
TopRight.args = {
  direction: 'top right',
  value: '321',
  items: [
    {
      content: 'asdasd23', value: '321',
    },
    {
      content: 'qwe', value: '456',
    },
  ],
};

export const BottomLeft: Story = {};
BottomLeft.args = {
  direction: 'bottom left',
  value: '321',
  items: [
    {
      content: 'asdasd23', value: '321',
    },
    {
      content: 'qwe', value: '456',
    },
  ],
};

export const BottomRight: Story = {};
BottomRight.args = {
  direction: 'bottom right',
  value: '321',
  items: [
    {
      content: 'asdasd23', value: '321',
    },
    {
      content: 'qwe', value: '456',
    },
  ],
};
