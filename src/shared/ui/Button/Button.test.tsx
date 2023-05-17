import { render, screen, waitFor } from '@testing-library/react';
import { Button, ButtonVariant } from './Button';

describe('Button', () => {
  test('test render', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('with variant clear', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button variant={ButtonVariant.CLEAR}>test</Button>);
    waitFor(() => {
      expect(screen.getByText('test')).toHaveClass('clear');
      screen.debug();
    });
  });
});
