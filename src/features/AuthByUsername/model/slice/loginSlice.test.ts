import { DeepPartial } from '@reduxjs/toolkit';
import { waitFor } from '@testing-library/react';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    waitFor(() => {
      const state: DeepPartial<LoginSchema> = {
        username: '123',
      };
      expect(loginReducer(
				state as LoginSchema,
				loginActions.setUsername('1235454'),
      )).toEqual({ username: '1235454' });
    });
  });

  test('test set password', () => {
    waitFor(() => {
      const state: DeepPartial<LoginSchema> = {
        password: 'pass12345',
      };
      expect(loginReducer(
				state as LoginSchema,
				loginActions.setPassword('pass45'),
      )).toEqual({ password: 'pass45' });
    });
  });
});
