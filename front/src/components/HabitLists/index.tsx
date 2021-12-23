import { useGetHabits } from '@utils/api/habitApi';
import { useUserInfo } from '@utils/api/userApi';
import React, { useEffect } from 'react';

const HabitLists = () => {
  const { data: user } = useUserInfo();
  const { data } = useGetHabits(user?.username);

  return data?.length ? <div>데이터있다.</div> : <div>데이터 없다.</div>;
};

export default HabitLists;
