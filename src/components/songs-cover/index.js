import React, { memo } from 'react'

import utils from '@/utils'

import { SongsCoverWrapper } from './style';


export default memo(function CatSongsCover(props) {

  const { info } = props;

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={utils.getSizeImage(info.picUrl, 140)} alt="" />
        {/* <img src={info.picUrl} alt="" /> */}
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {utils.getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source text-nowrap">
        by {info.copywriter || info.creator.nickname}
      </div>
    </SongsCoverWrapper>
  )
})
