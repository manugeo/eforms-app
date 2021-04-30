import React from 'react';
import { NativeRouter } from 'react-router-native';
import { Provider as PaperProvider } from 'react-native-paper';

import Main from './src/components/Main';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import AuthStorage from './src/utils/authStorage';

const authStorage = new AuthStorage();

const App = () => {
  return (
    <NativeRouter>
      <AuthStorageContext.Provider value={authStorage}>
        <PaperProvider>
          <Main />
        </PaperProvider>
      </AuthStorageContext.Provider>
    </NativeRouter>
  );
};

export default App;