// import React from 'react';
import { Redirect } from "react-router-dom";

import CatDiscover from '@/views/discover'
import CatSelf from '../views/self'
import CatFollow from '../views/follow'


const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: '/discover',
    component: CatDiscover
  },
  {
    path: '/self',
    exact: true,
    component: CatSelf
  },
  {
    path: '/follow',
    exact: true,
    component: CatFollow
  },
]


export default routes