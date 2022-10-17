import React from 'react';

import Standart from '../Standart';
import { CONTENT_TYPE, URL_REQUESTS } from '../../const';
import { imageInfo } from '../../api';

const ImageComp = () => (
  <Standart btnText='Image' apiMethod={imageInfo} url={URL_REQUESTS.image} type={CONTENT_TYPE.image} />
)


export default ImageComp;