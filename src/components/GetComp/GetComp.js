import React from 'react';

import Standart from '../Standart';
import { getInfo } from '../../api';

const GetComp = () => (
  <Standart btnText='Get' apiMethod={getInfo} />
)


export default GetComp;