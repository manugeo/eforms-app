import React from 'react';
import { NativeRouter } from 'react-router-native';

import Main from './src/components/Main';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import AuthStorage from './src/utils/authStorage';

const authStorage = new AuthStorage();

const App = () => {
  return (
    <NativeRouter>
      <AuthStorageContext.Provider value={authStorage}>
        <Main />
      </AuthStorageContext.Provider>
    </NativeRouter>
  );
};

export default App;