import React, { memo } from 'react'

import CatTopBanner from './web/top-banner';
import CatHotRecommend from './web/hot-recommend'
import CatNewAlbum from './web/new-album'
import CatRankingList from './web/ranking-list'


import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';


function CatRecommend() {
  return (
    <RecommendWrapper>
      <CatTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <CatHotRecommend />
          <CatNewAlbum />
          <CatRankingList />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}


export default memo(CatRecommend)