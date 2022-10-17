import React from 'react';

import Standart from '../Standart';
import { CONTENT_TYPE } from '../../const';
import { imageInfo } from '../../api';

const ImageComp = () => (
  <Standart btnText='Image' apiMethod={imageInfo} type={CONTENT_TYPE.image} />
)


export default ImageComp;