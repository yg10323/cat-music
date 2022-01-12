import React, { memo, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from './store/actionCreators'

function CatRecommend() {


  // 组件和redux关联, 获取数据 进行相关操作
  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>
      <h2>CatRecommend:{topBanners.length}</h2>
    </div>
  )
}


export default memo(CatRecommend)