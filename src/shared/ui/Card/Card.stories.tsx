import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Text } from '../Text/Text';

const meta: Meta<typeof Card> = {
  title: './Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {};
Primary.args = {
  children: <Text title="title" text="text" />,
};