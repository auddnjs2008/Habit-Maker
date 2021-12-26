import { IHabit } from '@typings/types';
import { deleteHabit, useGetHabits } from '@utils/api/habitApi';
import { useUserInfo } from '@utils/api/userApi';
import React, { useCallback, useEffect } from 'react';
import { ContainerUl, HabitLi } from './styles';

const HabitLists = () => {
  const { data: user } = useUserInfo();
  const { data: habits, error, mutate } = useGetHabits(user?.username);

  const onDeleteClick = useCallback(
    (title: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      if (user) {
        mutate((prev: IHabit[]) => {
          const newPrev = prev.filter((item) =>
            item._id ? item._id !== e.currentTarget.id : item.title === title && item.username === user.username,
          );
          return newPrev;
        }, false);
        deleteHabit(e.currentTarget.id, user.username, title).then((result) => console.log(result));
      }
    },
    [user],
  );

  return habits?.length ? (
    <ContainerUl>
      {habits.map((item: IHabit) => (
        <HabitLi backColor={item.color} key={item._id}>
          <h2>이름: {item.title}</h2>
          <div className="cycle">
            주기:{' '}
            {item.cycle === 'day'
              ? '매일'
              : item.cycle === 'week'
              ? `매주 ${item.cycleValue}일`
              : `매달 ${item.cycleValue}일`}
          </div>
          {item.memo ? <div className="memo">메모: {item.memo}</div> : ''}
          <button id={item._id} onClick={onDeleteClick(item.title)}>
            습관 삭제
          </button>
        </HabitLi>
      ))}
    </ContainerUl>
  ) : null;
};

export default HabitLists;
