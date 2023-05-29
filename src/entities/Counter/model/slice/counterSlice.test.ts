import { waitFor } from '@testing-library/react';
import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
  test('decrement', () => {
    waitFor(() => {
      const state: CounterSchema = { value: 10 };
      expect(counterReducer(state, counterActions.decremented())).toEqual({ value: 9 });
    });
  });
  test('increment', () => {
    waitFor(() => {
      const state: CounterSchema = { value: 10 };
      expect(counterReducer(state, counterActions.incremented())).toEqual({ value: 11 });
    });
  });
  test('should work with empty state', () => {
    waitFor(() => {
      expect(counterReducer(undefined, counterActions.incremented())).toEqual({ value: 1 });
    });
  });
});
