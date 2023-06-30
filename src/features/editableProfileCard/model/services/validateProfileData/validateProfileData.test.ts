import { waitFor } from '@testing-library/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

const data = {
  id: '1',
  username: 'username',
  age: 22,
  country: Country.Belarus,
  lastname: 'lastname',
  first: 'firstname',
  city: 'city',
  currency: Currency.EUR,
};

describe('validateProfileData.test', () => {
  test('success', async () => {
    waitFor(async () => {
      const result = validateProfileData(data);

      expect(result).toEqual([]);
    });
  });

  test('without first and lastname', () => {
    waitFor(async () => {
      const result = validateProfileData({ ...data, first: '', lastname: '' });

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_USER_DATA,
      ]);
    });
  });

  test('incorrect age', () => {
    waitFor(async () => {
      const result = validateProfileData({ ...data, age: undefined });

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_AGE,
      ]);
    });
  });

  test('incorrect country', () => {
    waitFor(async () => {
      const result = validateProfileData({ ...data, country: undefined });

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_COUNTRY,
      ]);
    });
  });

  test('incorrect all', () => {
    waitFor(async () => {
      const result = validateProfileData({ });

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_USER_DATA,
        ValidateProfileError.INCORRECT_AGE,
        ValidateProfileError.INCORRECT_COUNTRY,

      ]);
    });
  });
});
