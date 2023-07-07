import type { Meta, StoryObj } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/avatar.jpg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,

};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};

Primary.args = {
  data: {
    username: 'username',
    age: 22,
    country: Country.Belarus,
    lastname: 'lastname',
    first: 'firstname',
    city: 'city',
    currency: Currency.EUR,
    avatar: AvatarImg,
  },
};

export const IsLoading: Story = {};

IsLoading.args = {
  isLoading: true,
};

export const WithError: Story = {};

WithError.args = {
  error: 'true',
};
