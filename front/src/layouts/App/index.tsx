import Home from '@pages/Home';
import Login from '@pages/Login';
import Kakao from '@pages/Kakao';
import SignUp from '@pages/SignUp';
import Naver from '@pages/Naver';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SWRDevtools from '@jjordy/swr-devtools';
import Navigator from '@components/Navigator';

import { useUserInfo } from '@utils/api/userApi';
import Setting from '@pages/Setting';

const App = () => {
  const { data: user, error, mutate } = useUserInfo();

  return (
    <SWRDevtools>
      <>
        <Navigator user={user}></Navigator>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
          <Route path="/kakaoOauth" element={<Kakao mutate={mutate} />}></Route>
          <Route path="/naverOauth" element={<Naver />}></Route>
        </Routes>
      </>
    </SWRDevtools>
  );
};

export default App;
