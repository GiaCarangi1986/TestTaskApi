import React from 'react';

import Standart from '../Standart';
import { URL_REQUESTS } from '../../const';
import { postInfo } from '../../api';

const PostComp = () => (
  <Standart btnText='Post' apiMethod={postInfo} url={URL_REQUESTS.post} />
)


export default PostComp;