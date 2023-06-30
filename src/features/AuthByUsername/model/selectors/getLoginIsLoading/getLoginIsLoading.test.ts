import { waitFor } from '@testing-library/react';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginError.test', () => {
  test('should return value', () => {
    waitFor(() => {
      const state: DeepPartial<StateSchema> = {
        loginForm: {
          isLoading: true,
        },
      };
      expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
  });
  test('should work with empty state', () => {
    waitFor(() => {
      const state: DeepPartial<StateSchema> = {};
      expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
  });
});
