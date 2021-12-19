import Home from '@pages/Home';
import Login from '@pages/Login';
import Kakao from '@pages/Kakao';
import SignUp from '@pages/SignUp';
import Naver from '@pages/Naver';

import { getUserInfo } from '@utils/api/userApi';
import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(
      () =>
        getUserInfo().then((result) => {
          if (result.type === 'SUCCESS') {
            //user 정보  저장 필요
          } else if (result.type === 'ERROR') {
            navigate('/login');
            //
          }
        }),
      2000,
    );
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/kakaoOauth" element={<Kakao />}></Route>
      <Route path="/naverOauth" element={<Naver />}></Route>
    </Routes>
  );
};

export default App;
