import { StateSchema } from 'app/providers/StoreProvider';
import { waitFor } from '@testing-library/react';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
  test('should work with filled state', () => {
    waitFor(() => {
      const state: DeepPartial<StateSchema> = {
        profile: {
          isLoading: true,
        },
      };
      expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
  });
  test('should work with empty state', () => {
    waitFor(() => {
      const state: DeepPartial<StateSchema> = {};
      expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
  });
});