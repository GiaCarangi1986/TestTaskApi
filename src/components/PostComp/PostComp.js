import React from 'react';

import Standart from '../Standart';
import { postInfo } from '../../api';

const PostComp = () => (
  <Standart btnText='Post' apiMethod={postInfo} />
)


export default PostComp;