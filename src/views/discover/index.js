import React, { memo, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { dicoverMenu } from "@/common/local-data";
import { NavLink } from 'react-router-dom';
import {
  DiscoverWrapper,
  TopMenu
} from './style';

import request from '@/service/request';

export default memo(function CatDiscover(props) {

  useEffect(() => {
  }, [])
  const { route } = props;

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})

