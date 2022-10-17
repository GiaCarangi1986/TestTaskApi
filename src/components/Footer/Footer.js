import React, { useState, useContext } from 'react';

import { Footer as FooterView } from '../../views';

import { FooterLogContext } from '../../utils';
import style from './index.module.scss'

const Footer = () => {
  const [open, setOpen] = useState(true)
  const { info } = useContext(FooterLogContext);

  const handleClick = () => setOpen(prev => !prev)

  const btnText = open ? 'Закрыть' : 'Открыть'

  return (
    <div className={style.footer}>
      <button onClick={handleClick}>{btnText}</button>
      {open && (
        <FooterView text={info} />
      )}
    </div>
  )
}

export default Footer;