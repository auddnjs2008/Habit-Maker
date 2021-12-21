import styled from '@emotion/styled';

export const Container = styled.div`
  width: 200px;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  h1 {
    padding: 30px;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 600;
    color: #48dbfb;
  }
  ul {
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

export const List = styled.li<{ isColor: boolean }>`
  width: 150px;
  display: grid;
  grid-template-columns: 50px 1fr;
  justify-items: center;
  font-size: 1.2rem;
  color: ${(props) => (props.isColor ? '#48dbfb' : 'gray')};
  cursor: pointer;
  a {
    justify-self: flex-start;
    color: ${(props) => (props.isColor ? 'black' : 'gray')};
  }
`;
