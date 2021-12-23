import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(15, 15, 15, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  width: 500px;
  height: 400px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 5px rgba(15, 15, 15, 0.5);
  display: flex;
  flex-direction: column;
  header {
    height: 50px;
    padding: 15px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-size: 1.5rem;
    font-weight: 600;
    span {
      margin-left: 10px;
    }
    button {
      all: unset;
      margin-left: auto;
      width: 50px;
      height: 30px;
      font-size: 1.2rem;
      border: 1px solid black;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:active {
        transform: scale(0.99);
      }
    }
  }
  form {
    flex: 1;
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repepat(3, 1fr);
    row-gap: 30px;
    column-gap: 15px;

    div:not(div.color, div.notify) {
      display: grid;
      grid-template-rows: 30px 1fr;
      div.selectes {
        display: flex;
        align-items: center;
      }
      span {
        margin-right: 20px;
      }
    }
    div.color,
    div.notify {
      display: grid;
      grid-template-columns: 50px 1fr;
      justify-items: center;
    }

    input:not(input[type='color'], input[type='checkbox']) {
      width: 200px;
      height: 30px;
      margin-top: 10px;
      padding: 10px;
    }

    input[type='color'] {
      background-color: white;
      width: 30px;
      height: 30px;
    }
    input[type='checkbox'] {
      width: 30px;
      height: 30px;
    }
  }
`;
