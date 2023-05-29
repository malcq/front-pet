import { StateSchema } from 'app/providers/StoreProvider';
import { waitFor } from '@testing-library/react';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    waitFor(() => {
      expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
  });
});
