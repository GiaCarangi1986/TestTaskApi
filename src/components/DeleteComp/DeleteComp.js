import React from 'react';

import Standart from '../Standart';
import { URL_REQUESTS } from '../../const';
import { deleteInfo } from '../../api';

const DeleteComp = () => (
  <Standart btnText='Delete' apiMethod={deleteInfo} url={URL_REQUESTS.delete} />
)


export default DeleteComp;