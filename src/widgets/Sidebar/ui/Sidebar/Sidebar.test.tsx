import { fireEvent, screen, waitFor } from '@testing-library/react';
import {
  componentRender,
} from '@/shared/lib/tests/componentRender/componentRender';
import { Sidebar } from '../Sidebar/Sidebar';

describe('Sidebar', () => {
  test('test render', () => {
    waitFor(() => {
      componentRender(<Sidebar />);
      expect(screen.queryByTestId('sidebar')).toBeInTheDocument();
    });
  });

  test('test toogle', () => {
    waitFor(() => {
      componentRender(<Sidebar />);
      const toggleBtn = screen.queryByTestId('sidebar-toggle');
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
      fireEvent.click(toggleBtn as Element);
      expect(screen.queryByTestId('sidebar')).toHaveClass('collapsed');
    });
  });
});
