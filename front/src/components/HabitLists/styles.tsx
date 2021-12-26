import styled from '@emotion/styled';

export const ContainerUl = styled.ul`
  padding: 10px;
`;

export const HabitLi = styled.li<{ backColor: string }>`
  /* border: ${(props) => `5px solid ${props.backColor}`}; */

  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: ${(props) => `1px 1px 3px ${props.backColor}, inset 1px 1px 5px ${props.backColor}`};
  padding: 20px;
  display: grid;
  gap: 10px;
  grid-template: 'title cycle' 'memo button';
  grid-template-columns: 1fr 130px;
  h2 {
    grid-area: title;
  }
  div.cycle {
    grid-area: cycle;
  }
  div.memo {
    grid-area: memo;
  }
  button {
    grid-area: button;
    width: 80px;
  }
`;
