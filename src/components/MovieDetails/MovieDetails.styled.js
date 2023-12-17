import styled from 'styled-components';

export const StyledButton = styled.button`
  color: #f0f5ff;
  background-color: #0b0d3f;
  border: 1px solid #f0f5ff;
  border-radius: 10px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const StyledMovieContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #0b0d3f;
  border: 1px solid #f0f5ff;
  border-radius: 10px;
`;

export const StyledMovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledAdditionalInfo = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;

  a {
    font-weight: 700;
    padding: 5px;
    &.active {
      color: #0b0d3f;
      font-weight: 700;

      background-color: #f0f5ff;
      border-radius: 5px;
    }
  }
`;
