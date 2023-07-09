import { ReactNode } from 'react';

import { ReducersMapObject } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    initialState,
    asyncReducers,
  } = props;

  // const navigate = useNavigate();

  const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
    // navigate,
  );

  console.log('RENDER');

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
