import React, { memo } from 'react'

import CatTopBanner from './web/top-banner';


import {
  RecommendWrapper,
  // Content,
  // RecommendLeft,
  // RecommendRight
} from './style';


function CatRecommend() {
  return (
    <RecommendWrapper>
      <CatTopBanner></CatTopBanner>
    </RecommendWrapper>
  )
}


export default memo(CatRecommend)