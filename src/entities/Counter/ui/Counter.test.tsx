import { fireEvent, screen, waitFor } from '@testing-library/react';
import {
  componentRender,
} from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('test render', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    await waitFor(() => expect(screen.queryByTestId('value-title')).toHaveTextContent('10'));
  });

  test('increment', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('increment-btn'));
    await waitFor(() => expect(screen.queryByTestId('value-title')).toHaveTextContent('11'));
  });

  test('decrement', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('decrement-btn'));
      expect(screen.queryByTestId('value-title')).toHaveTextContent('9');
    });
  });
});
