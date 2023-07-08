import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { AvatarDropDown } from './AvatarDropDown';

const meta: Meta<typeof AvatarDropDown> = {
  title: 'features/AvatarDropDown',
  component: AvatarDropDown,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof AvatarDropDown>;

export const Primary: Story = {};
Primary.args = {

};
