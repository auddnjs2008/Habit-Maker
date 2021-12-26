import { IHabit, IUser } from '@typings/types';
import axios from 'axios';
import useSWR from 'swr';

export const useMakeHabit = async (habit: IHabit) => {
  try {
    const result = await axios.post('/api/habits/make', habit, { withCredentials: true });

    return { type: 'SUCCESS', data: result };
  } catch (e) {
    return { type: 'ERROR', data: e };
  }
};

export const useGetHabits = (username: string) => {
  const fetcher = (url: string) =>
    axios.post(url, { username }, { withCredentials: true }).then((result) => result.data);
  const { data, error, mutate } = useSWR(username ? '/api/habits/get' : '', fetcher);

  return { data, error, mutate };
};

export const deleteHabit = async (id: string, username: string, title: string) => {
  try {
    const result = await axios.delete('/api/habits/delete', {
      data: { _id: id, username, title },
      withCredentials: true,
    });
    return { type: 'SUCCESS', data: result };
  } catch (e) {
    return { type: 'ERROR', data: e };
  }
};
