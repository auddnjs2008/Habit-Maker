import { getKaKaoUser } from '@utils/api/userApi';
import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Kakao = () => {
  const location = useLocation();
  useEffect(() => {
    const code = location.search.split('=')[1];
    getKaKaoUser(code);
  }, []);

  return <div>리다이렉트중 </div>; // 후에 스피너나 다른 걸 사용
};

export default Kakao;
