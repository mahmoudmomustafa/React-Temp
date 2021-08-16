import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LoadingComponent from './components/LoadingComponent/LoadingComponent';
import ToastComponent from './components/ToastComponent/ToastComponent';
import useCachedResources from './hooks/useCachedResurces';
import Route from './navigation/Route';
import configureStore from './redux/store';

export default function App() {
  const store = configureStore()
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <Route />
        <LoadingComponent />
        <ToastComponent />
        <StatusBar style="auto" />
      </Provider>
    );
  }
}
