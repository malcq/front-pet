import { fireEvent, screen, waitFor } from '@testing-library/react';
import {
  componentRender,
} from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('test render', async () => {
    waitFor(() => {
      componentRender(<Counter />, {
        initialState: { counter: { value: 10 } },
      });
      expect(screen.queryByTestId('value-title')).toHaveTextContent('10');
    });
  });

  test('increment', async () => {
    waitFor(() => {
      componentRender(<Counter />, {
        initialState: { counter: { value: 10 } },
      });
      fireEvent.click(screen.getByTestId('increment-btn'));
      expect(screen.queryByTestId('value-title')).toHaveTextContent('11');
    });
  });

  test('decrement', async () => {
    waitFor(() => {
      componentRender(<Counter />, {
        initialState: { counter: { value: 10 } },
      });

      fireEvent.click(screen.getByTestId('decrement-btn'));
      expect(screen.queryByTestId('value-title')).toHaveTextContent('9');
    });
  });
});
