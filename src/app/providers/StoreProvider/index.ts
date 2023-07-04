import {
  ReduxStoreWithManager, StateSchema, ThunkConfig, StateSchemaKey,
} from './config/StateSchema';
import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export type {
  StateSchemaKey,
  AppDispatch,
  ReduxStoreWithManager,
  StateSchema,
  ThunkConfig,
};

export { StoreProvider, createReduxStore };
