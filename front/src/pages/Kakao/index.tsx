import { useKaKaoUser } from '@utils/api/userApi';
import React, { FC, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { KeyedMutator } from 'swr';

const Kakao: FC<{ mutate: KeyedMutator<any> }> = ({ mutate }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const code = location.search.split('=')[1];
  const { data, error } = useKaKaoUser(code);

  useEffect(() => {
    if (data) {
      mutate(data, false);
      navigate('/');
    }
  }, [data]);

  return <div>리다이렉트중 </div>; // 후에 스피너나 다른 걸 사용
};

export default Kakao;
