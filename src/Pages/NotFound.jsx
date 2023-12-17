import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Styled404Wrapper>
      <h1>404</h1>
      <h2>Page not found</h2>
      <button onClick={() => navigate('/')}>Home Page</button>
    </Styled404Wrapper>
  );
};

export default NotFound;

const Styled404Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  h1 {
    font-size: 120px;
  }
  h2 {
    font-size: 50px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  button {
    color: #f0f5ff;
    background-color: #0b0d3f;
    border: 1px solid #f0f5ff;
    border-radius: 10px;
    padding: 10px;
    font-size: 22px;
    cursor: pointer;
  }
`;
