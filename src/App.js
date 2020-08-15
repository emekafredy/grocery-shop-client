import React from 'react';

import { GroceriesProvider } from './context/goceries';
import { AuthProvider } from './context/auth';
import { CartProvider } from './context/cart';

import { RootView } from './views/RootView';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <GroceriesProvider>
          <RootView />
        </GroceriesProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
