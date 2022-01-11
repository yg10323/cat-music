// import React from 'react';
import { Redirect } from "react-router-dom";

import CatDiscover from '@/views/discover'
import CatRecommend from '@/views/discover/web/recommend'
import CatRanking from '@/views/discover/web/ranking'
import CatSongs from '@/views/discover/web/songs'
import CatDjradio from '@/views/discover/web/djradio'
import CatArtist from '@/views/discover/web/artist'
import CatAlbum from '@/views/discover/web/album'

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
    component: CatDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: "/discover/recommend",
        component: CatRecommend
      },
      {
        path: "/discover/ranking",
        component: CatRanking
      },
      {
        path: "/discover/songs",
        component: CatSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: CatDjradio
      },
      {
        path: "/discover/artist",
        component: CatArtist
      },
      {
        path: "/discover/album",
        component: CatAlbum
      },
      // {
      //   path: "/discover/player",
      //   component: HYPlayer
      // }
    ]
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