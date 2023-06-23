import { StateSchema } from 'app/providers/StoreProvider';
import { waitFor } from '@testing-library/react';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

describe('getProfileValidateErrors.test', () => {
  test('should work with filled state', () => {
    waitFor(() => {
      const state: DeepPartial<StateSchema> = {
        profile: {
          validateErrors: [
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
          ],
        },
      };
      expect(getProfileValidateErrors(state as StateSchema)).toEqual([
        ValidateProfileError.SERVER_ERROR,
        ValidateProfileError.INCORRECT_AGE,
      ]);
    });
  });

  test('should work with empty state', () => {
    waitFor(() => {
      const state: DeepPartial<StateSchema> = {};
      expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
  });
});
