import React, { memo } from 'react'
import CatAppHeader from './components/app-header'
import CatAppFooter from './components/app-footer'

export default memo(function App() {
  return (
    <div>
      <CatAppHeader />
      <CatAppFooter />
    </div>
  )
})
