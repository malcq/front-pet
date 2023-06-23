import { StateSchema } from 'app/providers/StoreProvider';
import { waitFor } from '@testing-library/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('should return error', () => {
    waitFor(() => {
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
          data,
        },
      };
      expect(getProfileData(state as StateSchema)).toEqual(data);
    });
  });
  test('should work with empty state', () => {
    waitFor(() => {
      const state: DeepPartial<StateSchema> = {};
      expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
  });
});
