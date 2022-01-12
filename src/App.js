import React, { memo } from 'react'
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import routes from './router'
import store from './store';

import { HashRouter } from 'react-router-dom';
import CatAppHeader from './components/app-header'
import CatAppFooter from './components/app-footer'


export default memo(function App() {
  return (
    <div>
      <Provider store={store}>
        <HashRouter>
          <CatAppHeader />
          {renderRoutes(routes)}
          <CatAppFooter />
        </ HashRouter>
      </Provider>
    </div>
  )
})
