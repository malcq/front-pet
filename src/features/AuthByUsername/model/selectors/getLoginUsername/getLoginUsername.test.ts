import { waitFor } from '@testing-library/react';

import { StateSchema } from '@/app/providers/StoreProvider';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginError.test', () => {
  test('should return value', () => {
    waitFor(() => {
      const state: DeepPartial<StateSchema> = {
        loginForm: {
          username: 'adsdf2',
        },
      };
      expect(getLoginUsername(state as StateSchema)).toEqual('adsdf2');
    });
  });
  test('should work with empty state', () => {
    waitFor(() => {
      const state: DeepPartial<StateSchema> = {};
      expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
  });
});
