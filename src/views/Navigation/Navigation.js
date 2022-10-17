import React from 'react'
import cn from 'classnames'
import { NavLink, useLocation } from 'react-router-dom'

import { PATHS } from '../../const'

import style from './index.module.scss'

const Navigation = () => {
  const { pathname } = useLocation()
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li>
          <NavLink
            to={PATHS.getPage.path}
            className={cn({ [style.active]: pathname === PATHS.getPage.path })}
          >
            Get
          </NavLink>
        </li>
        <li>
          <NavLink
            to={PATHS.postPage.path}
            className={cn({ [style.active]: pathname === PATHS.postPage.path })}
          >
            Post
          </NavLink>
        </li>
        <li>
          <NavLink
            to={PATHS.deletePage.path}
            className={cn({ [style.active]: pathname === PATHS.deletePage.path })}
          >
            Delete
          </NavLink>
        </li>
        <li>
          <NavLink
            to={PATHS.imagesPage.path}
            className={cn({ [style.active]: pathname === PATHS.imagesPage.path })}
          >
            Image
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
