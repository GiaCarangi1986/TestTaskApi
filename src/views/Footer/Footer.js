import React from 'react';

import style from './index.module.scss'

const Footer = ({ text }) => (
  <div className={style.footer}>{text}</div>
);

export default Footer;