import { Suspense, useEffect } from 'react';

import { StoryFn } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../../i18n/i18nForStorybook';

export const I18nDecorator = (StoryComponent: StoryFn, context: any) => {
  const { globals: { locale } } = context;

  // When the locale global changes
  // Set the new locale in i18n
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <StoryComponent />
      </I18nextProvider>
    </Suspense>
  );
};
