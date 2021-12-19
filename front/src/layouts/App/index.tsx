import Home from '@pages/Home';
import Login from '@pages/Login';
import Kakao from '@pages/Kakao';
import SignUp from '@pages/SignUp';
import Naver from '@pages/Naver';

import { useUserInfo } from '@utils/api/userApi';
import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SWRDevtools from '@jjordy/swr-devtools';

const App = () => {
  const navigate = useNavigate();
  const { data, error, mutate } = useUserInfo();

  useEffect(() => {
    if (data || error) {
      if (!data || error !== undefined) {
        navigate('/login');
      }
    }
  }, [data]);

  return (
    <SWRDevtools>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/kakaoOauth" element={<Kakao />}></Route>
        <Route path="/naverOauth" element={<Naver />}></Route>
      </Routes>
    </SWRDevtools>
  );
};

export default App;
