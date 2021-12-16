import useInput from '@hooks/useInput';
import { Header, LinkContainer, Wrapper } from '@pages/Login/styles';
import { signUpApi } from '@utils/api/userApi';
import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignUPContainer } from './styles';

const SignUp = () => {
  const [userName, setUserName, onUserNameChange] = useInput('');
  const [password, setPassword, onPasswordChange] = useInput('');
  const [passwordConfirm, setPasswordConfirm, onPasswordConfirmChange] = useInput('');
  const [email, setEmail, onEmailChange] = useInput('');
  const [name, setName, onNameChange] = useInput('');
  const [profileImage, setImage] = useState('');

  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      signUpApi(userName, email, password, passwordConfirm, name, profileImage).then((result) => {
        if (result.type === 'SUCCESS') {
          //로그인페이지로 이동
          navigate('/login');
        } else if (result.type === 'ERROR') {
          //에러 처리 팝업
        }
      });
    },
    [userName, password, passwordConfirm, email, name],
  );

  return (
    <Wrapper>
      <SignUPContainer>
        <Header>Habit Maker</Header>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="username" value={userName} onChange={onUserNameChange} />
          <input type="password" placeholder="password" value={password} onChange={onPasswordChange} />
          <input
            type="password"
            placeholder="passwordConfirm"
            value={passwordConfirm}
            onChange={onPasswordConfirmChange}
          />
          <input type="email" placeholder="email" value={email} onChange={onEmailChange} />
          <input type="text" placeholder="name" value={name} onChange={onNameChange} />
          <input type="submit" value="회원가입" />
        </form>
        <LinkContainer>
          <Link to="/login">로그인 하러가기</Link>
        </LinkContainer>
      </SignUPContainer>
    </Wrapper>
  );
};

export default SignUp;
