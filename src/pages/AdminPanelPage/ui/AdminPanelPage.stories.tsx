import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { AdminPanelPage } from './AdminPanelPage';

const meta: Meta<typeof AdminPanelPage> = {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Primary: Story = {};
Primary.args = {

};
