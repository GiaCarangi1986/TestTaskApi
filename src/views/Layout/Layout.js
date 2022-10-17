import React, { useState } from 'react'

import { Header } from '..';
import Footer from '../../components/Footer';
import { FooterLogContext } from '../../utils';

import style from './index.module.scss'

const Layout = ({ children }) => {
  const [info, setInfo] = useState([])

  return (
    <div className={style.layout}>
      <Header />
      <FooterLogContext.Provider
        value={{ setInfo, info }}
      >
        <div className={style.content}>{children}</div>
        <Footer />
      </FooterLogContext.Provider>
    </div>
  )
}

export default Layout