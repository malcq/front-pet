import { fireEvent, screen, waitFor } from '@testing-library/react';
import {
  renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

describe('Sidebar', () => {
  test('test render', () => {
    renderWithTranslation(<Sidebar />);
    waitFor(() => expect(screen.queryByTestId('sidebar')).toBeInTheDocument());
  });

  test('test toogle', async () => {
    renderWithTranslation(<Sidebar />);
    waitFor(() => {
      const toggleBtn = screen.queryByTestId('sidebar-toggle');
      fireEvent.click(toggleBtn);
    });

    waitFor(() => expect(screen.queryByTestId('sidebar')).toHaveClass('collapsed'));
  });
});
