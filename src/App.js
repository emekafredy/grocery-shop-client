import React from 'react';

import { GroceriesProvider } from './context/goceries';
import { AuthProvider } from './context/auth';
import { RootView } from './views/RootView';

function App() {

  return (
    <AuthProvider>
      <GroceriesProvider>
        <RootView />
      </GroceriesProvider>
    </AuthProvider>
  );
}

export default App;
