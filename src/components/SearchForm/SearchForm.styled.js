import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: fit-content;
  gap: 10px;
  padding: 5px;
  padding-left: 10px;
  margin-bottom: 20px;
  background-color: #f0f5ff;
  border-radius: 10px;
  input {
    border: none;
    background-color: transparent;
    height: 30px;
    outline: none;
    font-size: 20px;
  }
  button {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    color: #f0f5ff;
    background-color: #0b0d3f;
    cursor: pointer;
  }
`;
