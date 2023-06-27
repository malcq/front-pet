import { ReduxStoreWithManager, StateSchema, ThunkConfig } from './config/StateSchema';
import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export type {
  AppDispatch, ReduxStoreWithManager, StateSchema, ThunkConfig,
};

export { StoreProvider, createReduxStore };
