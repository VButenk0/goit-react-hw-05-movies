const { default: styled } = require('styled-components');

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  li {
    width: 80%;
    padding: 20px;
    border-radius: 10px;
    background-color: #0b0d3f;
    border: 1px solid #f0f5ff;
  }
`;

export const StyledTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  span {
    font-size: 16px;
    font-weight: 400;
  }
`;
