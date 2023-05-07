import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <div className={classNames('', {}, [className])}>
      {' '}
      <Button variant={ButtonVariant.CLEAR} onClick={toggle}>
        {t(short ? 'shortLanguage' : 'language')}
      </Button>
    </div>
  );
};
