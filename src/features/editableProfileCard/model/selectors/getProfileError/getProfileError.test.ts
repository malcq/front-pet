import { waitFor } from '@testing-library/react';

import { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
  test('should return error', () => {
    waitFor(() => {
      const state: DeepPartial<StateSchema> = {
        profile: {
          error: '123',
        },
      };
      expect(getProfileError(state as StateSchema)).toEqual('123');
    });
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    waitFor(() => {
      expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
  });
});
