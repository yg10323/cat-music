import React, { memo, useEffect, } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import CatHotRecommendHeader from '@/components/recommend-header'
import CatAlbumCover from '@/components/album-cover';

import { Carousel } from 'antd';
import { AlbumWrapper } from './style';
import { getNewAlbumAction } from '../../store/actionCreators';


export default memo(function CatNewAlbum() {

  // redux hooks
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <CatHotRecommendHeader title="新碟上架" />
      <div>
        {
          newAlbums || 11111
        }
      </div>
    </AlbumWrapper>
  )
})
