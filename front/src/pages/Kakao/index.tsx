import { useKaKaoUser } from '@utils/api/userApi';
import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const Kakao = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const code = location.search.split('=')[1];
  const { data, error, mutate } = useKaKaoUser(code);
  useEffect(() => {
    if (data || error) {
      if (data && !error) {
        navigate('/');
      } else if (error) {
        navigate('/login');
      }
    }
  }, [data]);

  return <div>리다이렉트중 </div>; // 후에 스피너나 다른 걸 사용
};

export default Kakao;
