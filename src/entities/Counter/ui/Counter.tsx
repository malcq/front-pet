/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { Button } from '@/shared/ui/Button';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useCounterValue();
  const { decremented, incremented, add } = useCounterActions();
  const handleInc = () => {
    incremented();
  };
  const handleDec = () => {
    decremented();
  };

  const handleAddFive = () => {
    add(5);
  };
  return (
    <div>

      <h1 data-testid="value-title">
        {counterValue}
      </h1>
      <Button
        onClick={handleAddFive}
        data-testid="increment-btn"
      >
        {t('addFive')}
      </Button>
      <Button
        onClick={handleInc}
        data-testid="increment-btn"
      >
        {t('increment')}
      </Button>
      <Button
        onClick={handleDec}
        data-testid="decrement-btn"
      >
        {t('decrement')}

      </Button>
    </div>
  );
};
