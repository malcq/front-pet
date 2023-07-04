import { DecoratorFn } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme): DecoratorFn => (StoryComponent) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>

);
