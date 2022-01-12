import React, { memo } from 'react'

import CatHotRecommendHeader from '@/components/recommend-header'

import { HotRecommendWrapper } from './style';


export default memo(function CatHotRecommend() {
  return (
    <HotRecommendWrapper>
      <CatHotRecommendHeader title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />
    </HotRecommendWrapper >
  )
})
