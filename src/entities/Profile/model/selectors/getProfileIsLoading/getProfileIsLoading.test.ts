import { StateSchema } from 'app/providers/StoreProvider';
import { waitFor } from '@testing-library/react';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
  test('should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    waitFor(() => {
      expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
  });
});
