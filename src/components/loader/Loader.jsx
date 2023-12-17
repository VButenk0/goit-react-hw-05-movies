import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledLoader>
      <InfinitySpin width="200" color="#f0f5ff" />
    </StyledLoader>
  );
};

export default Loader;

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
