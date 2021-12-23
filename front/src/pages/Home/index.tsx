import { useUserInfo } from '@utils/api/userApi';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import { Container } from './styles';

const Home = () => {
  const { data, error, mutate } = useUserInfo();
  return data ? (
    <Container>
      {data.name}
      {data.email}
    </Container>
  ) : (
    <div>로딩중</div>
  );
};

export default Home;
