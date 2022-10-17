import React from 'react';

import ImageContent from './ImageContent';
import JSONContent from './JSONContent';
import { CONTENT_TYPE } from '../../const';

import style from './index.module.scss'

const Container = ({ data, error, loading, type = CONTENT_TYPE.json }) => {
  const CONTENT_VARIANTS = {
    [CONTENT_TYPE.image]: ImageContent,
    [CONTENT_TYPE.json]: JSONContent
  }

  const Content = CONTENT_VARIANTS[type]

  return (
    <div className={style.container}>
      {
        data && (
          <div>
            <Content data={data} />
          </div>
        )
      }
      {
        error && (
          <div className={style.content}>{`Произошла ошибка: ${error}`}</div>
        )
      }
      {
        loading && (
          <div>Загрузка...</div>
        )
      }
    </div>
  )
}

export default Container;