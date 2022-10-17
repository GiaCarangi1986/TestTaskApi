import React from 'react';

import Standart from '../Standart';
import { deleteInfo } from '../../api';

const DeleteComp = () => (
  <Standart btnText='Delete' apiMethod={deleteInfo} />
)


export default DeleteComp;