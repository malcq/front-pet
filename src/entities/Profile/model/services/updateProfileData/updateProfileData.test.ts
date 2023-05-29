import { waitFor } from '@testing-library/react';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
  username: 'username',
  age: 22,
  country: Country.Belarus,
  lastname: 'lastname',
  first: 'firstname',
  city: 'city',
  currency: Currency.EUR,
};

describe('updateProfileData.test', () => {
  test('success', async () => {
    waitFor(async () => {
      const thunk = new TestAsyncThunk(updateProfileData, {
        profile: {
          form: data,
          isLoading: false,
          readonly: true,
        },
      });
      thunk.api.put.mockReturnValue(Promise.resolve({ data }));
      const result = await thunk.callThunk();

      expect(thunk.api.put).toHaveBeenCalled();
      expect(result.meta.requestStatus).toBe('fulfilled');
      expect(result.payload).toEqual(data);
    });
  });

  test('error', () => {
    waitFor(async () => {
      const thunk = new TestAsyncThunk(updateProfileData, {
        profile: {
          form: data,
          isLoading: false,
          readonly: true,
        },
      });
      thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
      const result = await thunk.callThunk();

      expect(result.meta.requestStatus).toBe('rejected');
      expect(result.payload).toEqual([
        ValidateProfileError.SERVER_ERROR,
      ]);
    });
  });

  test('validate error', () => {
    waitFor(async () => {
      const thunk = new TestAsyncThunk(updateProfileData, {
        profile: {
          form: { ...data, lastname: '' },
          isLoading: false,
          readonly: true,
        },
      });
      const result = await thunk.callThunk();

      expect(result.meta.requestStatus).toBe('rejected');
      expect(result.payload).toEqual([
        ValidateProfileError.INCORRECT_USER_DATA,
      ]);
    });
  });
});
