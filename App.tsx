import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Bootstrap } from '@/Bootstrap';
import { store } from '@/store';
import { storePersistor } from '@/store/storePersistor';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={storePersistor}>
        <Bootstrap />
      </PersistGate>
    </Provider>
  );
}
