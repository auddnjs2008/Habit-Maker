import { getNaverUser } from '@utils/api/userApi';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Naver = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const code = location.search.split('=')[1].split('&')[0];
    getNaverUser(code, navigate);
  }, []);

  return <div>네이버 리다이렉트 중</div>;
};

export default Naver;
