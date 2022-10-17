import React, { useState } from 'react';

import { Footer as FooterView } from '../../views';

import style from './index.module.scss'

const Footer = () => {
  const [open, setOpen] = useState(true)

  const handleClick = () => setOpen(prev => !prev)

  const btnText = open ? 'Закрыть' : 'Открыть'

  return (
    <div className={style.footer}>
      <button onClick={handleClick}>{btnText}</button>
      {open && (
        <FooterView text={btnText} />
      )}
    </div>
  )
}

export default Footer;