import React from 'react';
import {Provider} from 'react-redux';
import Store from './redux/store';
//import Home from './screens/Home';
import Navigation from './navigation';
const App = () => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
};

export default App;
