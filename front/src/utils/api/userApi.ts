import axios from 'axios';

export const loginApi = async (username: string, password: string) => {
  try {
    const result = await axios.post('/api/users/login', { username, password });
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
    const result = await axios.post('/api/users/signup', {
      username,
      email,
      password,
      passwordConfirm,
      name,
      profileImage,
    });
    return { type: 'SUCCESS', data: result };
  } catch (e) {
    return { type: 'ERROR', data: e };
  }
};

export const getUserInfo = async () => {
  try {
    const result = await axios.get('/api/users/session');
    return { type: 'SUCCESS', data: result.data };
  } catch (e) {
    return { type: 'ERROR', data: e };
  }
};

export const getKaKaoUser = (code: string) => {
  axios
    .post('/api/users/kakao/finish', { code })
    .then((result) => {
      console.log(result);
    })
    .catch((e) => {
      console.log(e);
    });
};
