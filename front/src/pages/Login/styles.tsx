import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  border-radius: 10px;
  width: 32rem;
  min-width: 25rem;
  height: 19.75rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 7px #bdc3c7, inset 0px 2px 5px #bdc3c7;
  form {
    /* max-width: 30rem; */
    width: 100%;
    display: flex;
    flex-direction: column;
    input {
      border: none;
      outline: none;
      height: 3.125rem;
      font-size: 1.2rem;
    }
    input[type='text'],
    input[type='password'],
    input[type='email'] {
      margin-bottom: 10px;
      border-radius: 6px;
      background-color: #e6e6e6;
      padding: 0 5px;
    }
    input::-webkit-input-placeholder {
      padding: 5px;
      font-size: 1.2rem;
    }

    input:focus:not(input[type='submit']) {
      border: 2px solid black;
    }
  }
`;

export const LinkContainer = styled.div`
  align-self: flex-end;

  a {
    margin-left: 10px;
  }
`;

export const Header = styled.header`
  font-size: 2rem;
`;
