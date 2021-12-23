import axios from 'axios';
import useSWR from 'swr';

export const loginApi = async (username: string, password: string) => {
  try {
    const result = await axios.post('/api/users/login', { username, password }, { withCredentials: true });
    return { type: 'SUCCESS', data: result };
  } catch (e) {
    return { type: 'ERROR', data: e };
  }
};

export const signUpApi = async (
  username: string,
  email: string,
  password: string,
  passwordConfirm: string,
  name: string,
  profileImage: string,
) => {
  try {
    const result = await axios.post(
      '/api/users/signup',
      {
        username,
        email,
        password,
        passwordConfirm,
        name,
        profileImage,
      },
      { withCredentials: true },
    );
    return { type: 'SUCCESS', data: result };
  } catch (e) {
    return { type: 'ERROR', data: e };
  }
};

// 세션이 존재하는지 받아온다.
export const useUserInfo = () => {
  const fetcher = (url: string) => axios.get(url, { withCredentials: true }).then((result) => result.data);

  const { data, error, mutate } = useSWR('/api/users/session', fetcher);

  return { data, error, mutate };
};

export const useKaKaoUser = (code: string) => {
  const fetcher = (url: string) =>
    axios.post(url, { code }, { withCredentials: true }).then((result) => {
      return result.data;
    });

  const { data, error, mutate } = useSWR('/api/users/kakao/finish', fetcher);

  return { data, error, mutate };
};

export const kakaoLogout = (tokenKey: string) => {
  axios.post('/api/users/kakao/logout', { tokenKey }, { withCredentials: true }).then((result) => {
    console.log(result);
  });
};

export const useNaverUser = (code: string) => {
  const fetcher = (url: string) => axios.post(url, { code }, { withCredentials: true }).then((result) => result.data);
  const { data, error, mutate } = useSWR('/api/users/naver/finish', fetcher);
  return { data, error, mutate };
};

export const useLogout = async () => {
  try {
    const data = await axios.get('api/users/logout', { withCredentials: true });
    return data;
  } catch (e) {
    return e;
  }
};
