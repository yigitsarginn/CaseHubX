import { persistStore } from 'redux-persist';
import { store } from '@/store';

export const storePersistor = persistStore(store);
