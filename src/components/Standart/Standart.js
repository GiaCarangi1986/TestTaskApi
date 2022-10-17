import React from 'react';

import { useGetResponse } from '../../utils';
import { Container } from '../../views';

const Standart = ({ btnText, apiMethod, url, ...props }) => {
  const { data, error, loading, getResult } = useGetResponse()

  const handleClick = () => {
    getResult(apiMethod, url)
  }

  return (
    <div>
      <button onClick={handleClick}>{btnText}</button>
      <Container data={data} error={error} loading={loading} {...props} />
    </div>
  )
}

export default Standart;