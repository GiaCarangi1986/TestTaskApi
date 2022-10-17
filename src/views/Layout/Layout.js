import React from 'react'

import { Header } from '..';
import Footer from '../../components/Footer';

import style from './index.module.scss'

const Layout = ({ children }) => (
  <div className={style.layout}>
    <Header />
    <div className={style.content}>{children}</div>
    <Footer />
  </div>
)

export default Layout