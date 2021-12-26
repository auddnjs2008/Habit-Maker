import styled from '@emotion/styled';

export const Container = styled.div`
  border: 1px solid black;
  width: calc(100% - 200px);
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  display: flex;
`;

export const HabitWrapper = styled.div`
  width: 50%;
  min-width: 500px;
  height: 100%;
  border: 1px solid blue;
`;
export const WeekWrapper = styled.div`
  width: 50%;
  min-width: 500px;
  height: 100%;
  border: 1px solid red;
`;

export const OutUL = styled.ul`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(8, minmax(100px, 1fr));
  grid-template-rows: 100%;
  li {
    height: 100%;
  }
`;

export const DayBox = styled.div`
  border: 1px solid black;
  height: 100%;
  header {
    padding: 30px;
    text-align: center;
    border-bottom: 1px solid gray;
  }
`;
