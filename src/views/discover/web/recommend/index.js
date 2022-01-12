import React, { memo, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { getTopBannerAction } from './store/actionCreators'

function CatRecommend() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>
      <h2>CatRecommend</h2>
    </div>
  )
}


export default memo(CatRecommend)