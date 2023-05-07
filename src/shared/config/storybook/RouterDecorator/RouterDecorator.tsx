import React from 'react';
import { StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => StoryObj) => (
  <BrowserRouter>
    {story()}
  </BrowserRouter>
);
