import { fireEvent, screen, waitFor } from '@testing-library/react';
import {
  componentRender,
} from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

describe('Sidebar', () => {
  test('test render', () => {
    componentRender(<Sidebar />);
    waitFor(() => {
      expect(screen.queryByTestId('sidebar')).toBeInTheDocument();
    });
  });

  test('test toogle', () => {
    componentRender(<Sidebar />);
    waitFor(() => {
      const toggleBtn = screen.queryByTestId('sidebar-toggle');
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
      fireEvent.click(toggleBtn);
      expect(screen.queryByTestId('sidebar')).toHaveClass('collapsed');
    });
  });
});
