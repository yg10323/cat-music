import React, { memo } from 'react'

import { renderRoutes } from 'react-router-config';
import routes from './router'

import { HashRouter } from 'react-router-dom';
import CatAppHeader from './components/app-header'
import CatAppFooter from './components/app-footer'


export default memo(function App() {
  return (
    <div>
      <HashRouter>
        <CatAppHeader />
        {renderRoutes(routes)}
        <CatAppFooter />
      </ HashRouter>
    </div>
  )
})
