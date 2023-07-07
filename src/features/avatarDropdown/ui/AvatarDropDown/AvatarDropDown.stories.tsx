import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropDown } from './AvatarDropDown';

const meta: Meta<typeof AvatarDropDown> = {
  title: 'features/AvatarDropDown',
  component: AvatarDropDown,
};

export default meta;
type Story = StoryObj<typeof AvatarDropDown>;

export const Primary: Story = {};
Primary.args = {

};
