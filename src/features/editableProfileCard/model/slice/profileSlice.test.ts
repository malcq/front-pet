import { waitFor } from '@testing-library/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema } from '../types/editableProfileCardSchema';

const data = {
  username: 'username',
  age: 22,
  country: Country.Belarus,
  lastname: 'lastname',
  first: 'firstname',
  city: 'city',
  currency: Currency.EUR,
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    waitFor(() => {
      const state: DeepPartial<ProfileSchema> = { readonly: false };
      expect(profileReducer(
				state as ProfileSchema,
				profileActions.setReadonly(true),
      )).toEqual({ readonly: true });
    });
  });
  /* test('test cancel edit', () => {
    waitFor(() => {
      const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
      expect(profileReducer(
				state as ProfileSchema,
				profileActions.cancelEdit(),
      )).toEqual({
        readonly: true,
        validateErrors: [],
        data,
        form: data,
      });
    });
  });

  test('test update profile', () => {
    waitFor(() => {
      const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
      expect(profileReducer(
				state as ProfileSchema,
				profileActions.updateProfile({ username: '1234' }),
      )).toEqual({
        form: { username: '1234' },
      });
    });
  });

  test('test update profile service pending', () => {
    waitFor(() => {
      const state: DeepPartial<ProfileSchema> = {
        isLoading: false,
        validateErrors: [ValidateProfileError.SERVER_ERROR],
      };
      expect(profileReducer(
				state as ProfileSchema,
				updateProfileData.pending,
      )).toEqual({
        isLoading: true,
        validateErrors: undefined,
      });
    });
  });

  test('test update profile service fullfilled', () => {
    waitFor(() => {
      const state: DeepPartial<ProfileSchema> = {
        isLoading: true,
      };
      expect(profileReducer(
				state as ProfileSchema,
				updateProfileData.fulfilled(data, ''),
      )).toEqual({
        isLoading: false,
        validateErrors: undefined,
        readonly: true,
        validateError: undefined,
        form: data,
        data,
      });
    });
  }); */
});
