import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features /LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.args = {};

Primary.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'zxc' },
})];

export const WithError: Story = {};
WithError.args = {};

WithError.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'zxc', error: 'wrong credentials' },
})];

export const Loading: Story = {};
Loading.args = {};

Loading.decorators = [StoreDecorator({
  loginForm: { isLoading: true },
})];
