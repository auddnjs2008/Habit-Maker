import React, { useCallback, useEffect, useState } from 'react';
import { Button, Container, Header, LinkContainer, Wrapper } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '@hooks/useInput';
import { loginApi } from '@utils/api/userApi';

const Login = () => {
  const [id, setId, onIdChange] = useInput('');
  const [password, setPassword, onPasswordChange] = useInput('');
  const navigate = useNavigate();
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      loginApi(id, password).then((result) => {
        if (result.type === 'SUCCESS') {
          // 상태관리 로그인 저장 필요
          // 홈으로 이동
          navigate('/');
        } else if (result.type === 'ERROR') {
          //error 팝업 창 띄워준다.
        }
      });
    },
    [id, password],
  );

  return (
    <Wrapper>
      <Container>
        <Header>Habit Maker</Header>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="username" value={id} onChange={onIdChange} />
          <input type="password" placeholder="password" value={password} onChange={onPasswordChange} />
          <input type="submit" value="로그인" />
          <a href={`${process.env.REACT_APP_KAKAO_AUTH_URL}`}>
            <Button type="button">Kakako Talk 로그인</Button>
          </a>
          <a href="">
            <Button type="button">네이버로 로그인</Button>
          </a>
        </form>
        <LinkContainer>
          아직 회원이 아니신가요??
          <Link to="/signup">회원가입 하러가기</Link>
        </LinkContainer>
      </Container>
    </Wrapper>
  );
};

export default Login;
