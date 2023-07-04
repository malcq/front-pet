import { waitFor } from '@testing-library/react';

import { StateSchema } from '@/app/providers/StoreProvider';

import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
  waitFor(() => {
    test('should return error', () => {
      const state: DeepPartial<StateSchema> = {
        loginForm: {
          error: 'error',
        },
      };
      expect(getLoginError(state as StateSchema)).toEqual('error');
    });
  });
  test('should work with empty state', () => {
    waitFor(() => {
      const state: DeepPartial<StateSchema> = {};
      expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
  });
});
