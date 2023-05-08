import { fireEvent, screen, waitFor } from '@testing-library/react';
import {
  componentRender,
} from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('test render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    waitFor(() => expect(screen.queryByTestId('value-title')).toHaveTextContent('10'));
  });

  test('increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('increment-btn'));
    waitFor(() => expect(screen.queryByTestId('value-title')).toHaveTextContent('11'));
  });

  test('decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('decrement-btn'));
    waitFor(() => expect(screen.queryByTestId('value-title')).toHaveTextContent('9'));
  });
});
