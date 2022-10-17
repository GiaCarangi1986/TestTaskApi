import React from 'react';

import style from './index.module.scss'

const ImageContent = ({ data }) => (
  <div className={style['wrap-img']}>
    {
      data.map((image, index) => (
        <img key={String(image + index)} src={image} className={style.image} alt='animal' />
      ))
    }
  </div>
)

export default ImageContent;