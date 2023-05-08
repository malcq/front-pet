/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.incremented());
  };
  const decrement = () => {
    dispatch(counterActions.decremented());
  };
  return (
    <div>

      <h1 data-testid="value-title">
        {counterValue}
      </h1>
      <Button onClick={increment} data-testid="increment-btn">
        {t('increment')}
        increment
      </Button>
      <Button onClick={decrement} data-testid="decrement-btn">{t('decrement')}</Button>
    </div>
  );
};