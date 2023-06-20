import type { Meta, StoryObj } from '@storybook/react';
import { DropDownMenu } from './DropDownMenu';
import { Button } from '../Button/Button';

const meta: Meta<typeof DropDownMenu> = {
  title: 'shared/DropDownMenu',
  component: DropDownMenu,
};

export default meta;
type Story = StoryObj<typeof DropDownMenu>;

export const Normal: Story = {};
Normal.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
    {
      content: 'third',
    },
  ],
};
