import React, { memo } from 'react'

import CatTopBanner from './web/top-banner';
import CatHotRecommend from './web/hot-recommend'

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
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}


export default memo(CatRecommend)