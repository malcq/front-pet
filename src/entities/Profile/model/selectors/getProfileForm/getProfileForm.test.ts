import { StateSchema } from 'app/providers/StoreProvider';
import { waitFor } from '@testing-library/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileData.test', () => {
  test('should return error', () => {
    const data = {
      username: 'username',
      age: 22,
      country: Country.Belarus,
      lastname: 'lastname',
      first: 'firstname',
      city: 'city',
      currency: Currency.EUR,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    waitFor(() => {
      expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
  });
});
