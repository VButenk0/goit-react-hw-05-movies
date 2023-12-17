const { default: styled } = require('styled-components');

export const StyledList = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(2, 450px);
  grid-gap: 20px; */
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #0b0d3f;
  width: 400px;
  border-radius: 10px;
  border: 1px solid #f0f5ff;
`;

export const StyledActorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledNoPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 150px;
  text-align: center;
  border: 1px solid #f0f5ff;
`;
