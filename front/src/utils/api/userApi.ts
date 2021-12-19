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

export const getKaKaoUser = (code: string, navigate: (to: string) => void) => {
  axios
    .post('/api/users/kakao/finish', { code })
    .then((result: any) => {
      if (result.status === 200 && result.data) {
        // 유저 저장 해준다.

        //redirect
        navigate('/');
      }
    })
    .catch((e) => {
      // 에러 처리
    });
};

export const kakaoLogout = (tokenKey: string) => {
  axios.post('/api/users/kakao/logout', { tokenKey }).then((result) => {
    console.log(result);
  });
};

export const getNaverUser = (code: string, navigate: (to: string) => void) => {
  axios
    .post('/api/users/naver/finish', { code })
    .then((result: any) => {
      // 유저 정보 저장해준다.

      //redirect
      navigate('/');
    })
    .catch((e) => {
      // 에러처리
    });
};
