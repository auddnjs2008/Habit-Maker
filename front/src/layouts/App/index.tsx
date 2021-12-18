import Home from '@pages/Home';
import Login from '@pages/Login';
import Kakao from '@pages/Kakao';
import SignUp from '@pages/SignUp';

import { getUserInfo } from '@utils/api/userApi';
import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    getUserInfo().then((result) => {
      if (result.type === 'SUCCESS') {
        //user 정보  저장 필요
      } else if (result.type === 'ERROR') {
        // navigate('/login');
        //
      }
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/kakaoOauth" element={<Kakao />}></Route>
    </Routes>
  );
};

export default App;
