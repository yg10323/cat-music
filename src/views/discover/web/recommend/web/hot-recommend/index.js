import React, { memo, useEffect, } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import CatHotRecommendHeader from '@/components/recommend-header'
import CatSongsCover from '@/components/songs-cover'

import { HotRecommendWrapper } from './style';
import { getHotRecommendAction } from '../../store/actionCreators'


export default memo(function CatHotRecommend() {
  // state 

  // redux-hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.get('recommend').get('hotRecommends'),
  }), shallowEqual)
  const dispatch = useDispatch()

  // other-hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <CatHotRecommendHeader title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <CatSongsCover key={item.id} info={item} />
          })
        }
      </div>
    </HotRecommendWrapper >
  )
})
