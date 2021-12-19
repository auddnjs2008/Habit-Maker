import { useNaverUser } from '@utils/api/userApi';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Naver = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const code = location.search.split('=')[1].split('&')[0];
  const { data, error, mutate } = useNaverUser(code);

  useEffect(() => {
    if (data || error) {
      if (data && !error) {
        navigate('/');
      } else if (error) {
        navigate('/login');
      }
    }
  }, [data]);

  return <div>네이버 리다이렉트 중</div>;
};

export default Naver;
