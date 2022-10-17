import React from 'react';

import Standart from '../Standart';
import { URL_REQUESTS } from '../../const';
import { getInfo } from '../../api';

const GetComp = () => (
  <Standart btnText='Get' apiMethod={getInfo} url={URL_REQUESTS.get} />
)


export default GetComp;