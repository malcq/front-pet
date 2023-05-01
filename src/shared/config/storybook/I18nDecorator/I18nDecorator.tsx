import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { StoryObj } from '@storybook/react';
import i18n from '../../i18n/i18nForStorybook';

export const I18nDecorator = (store: () => StoryObj, context: any) => {
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
        {store()}
      </I18nextProvider>
    </Suspense>
  );
};