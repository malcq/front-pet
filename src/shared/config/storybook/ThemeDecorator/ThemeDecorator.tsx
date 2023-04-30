import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';

export const ThemeDecorator = (theme: Theme): Decorator => (StoryComponent) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);

/* export const ThemeDecorator = (theme: Theme): Decorator => (Story) => React.createElement(
  'div',
  {
    className: `app ${theme}`,
  },
  <Story />,
); */

/* const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
); */
/* export default ThemeDecorator; */
