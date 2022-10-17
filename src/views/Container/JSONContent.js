import React from 'react';

const JSONContent = ({ data }) => (
  <React.Fragment>{JSON.stringify(data)}</React.Fragment>
)

export default JSONContent;