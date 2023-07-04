import { memo, useCallback } from 'react';

import CopyIcon from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Code.module.scss';
import { Button, ButtonVariant } from '../Button/Button';

interface CodeProps {
	text: string;
	className?: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        onClick={onCopy}
        className={cls.copyBtn}
        variant={ButtonVariant.CLEAR}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>

      <code>
        {text}
      </code>
    </pre>

  );
});
