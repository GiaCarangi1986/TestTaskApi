import React from 'react';

import style from './index.module.scss'

const Footer = ({ text = [] }) => (
  <div className={style.footer}>
    {text.map(el => (
      <div key={el.date} className={style.info}>
        <p><span className={style.name}>Время: </span>{el.date.toString()}</p>
        <p><span className={style.name}>URL запроса: </span>{el.urlSer}</p>
      </div>
    ))}
  </div>
)


export default Footer;