import React from 'react';
import {Provider} from 'react-redux';
import NavigationScreen from './src/router';
import {store} from './src/redux/reducer/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationScreen />
    </Provider>
  );
};
export default App;
