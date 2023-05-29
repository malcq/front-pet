import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AvatarImg from 'shared/assets/tests/avatar.jpg';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,

};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {};

Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  profile: {
    form: {
      username: 'username',
      age: 22,
      country: Country.Belarus,
      lastname: 'lastname',
      first: 'firstname',
      city: 'city',
      currency: Currency.EUR,
    },
  },
})];

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
      form: {
        username: 'username',
        age: 22,
        country: Country.Belarus,
        lastname: 'lastname',
        first: 'firstname',
        city: 'city',
        currency: Currency.EUR,
      },
    },
  })],
};
