import React from 'react'

import GetComp from '../components/GetComp'
import DeleteComp from '../components/DeleteComp';
import PostComp from '../components/PostComp';
import ImageComp from '../components/ImageComp'
import { Layout } from '../views';
import { PAGE_NAME } from '../const';

const GetDesigner = ({ pageName }) => {
  const PAGE = {
    [PAGE_NAME.getPage]: GetComp,
    [PAGE_NAME.postPage]: PostComp,
    [PAGE_NAME.deletePage]: DeleteComp,
    [PAGE_NAME.imagesPage]: ImageComp
  }

  const Component = PAGE[pageName] ?? null

  return (
    <Layout>
      <Component />
    </Layout>
  )
}

export default GetDesigner;