import React, { useCallback, useState } from 'react';
import axios from 'axios';
const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChange = useCallback((e) => {
    const type = e.target.type;
    if (type === 'text') {
      setId(e.target.value);
    } else if (type === 'password') {
      setPassword(e.target.value);
    }
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      axios
        .post('/api/users/login', { username: id, password })
        .then(() => console.log('성공'))
        .catch((e) => console.log(e));
    },
    [id, password],
  );

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="username" value={id} onChange={onChange} />
      <input type="password" placeholder="password" value={password} onChange={onChange} />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Login;
