import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBook, faChalkboard, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IUser } from '@typings/types';
import { useLogout, useUserInfo } from '@utils/api/userApi';
import React, { FC, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { Container, List } from './styles';

const Navigator: FC<{ user: IUser }> = ({ user }) => {
  const navigator = useNavigate();
  const location = useLocation();

  const onLogoutClick = useCallback(() => {
    useLogout().then((result) => {
      if ((result as any).status === 200) navigator('/login');
    });
  }, []);
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <Container>
      <h1>Habit Maker</h1>
      <ul>
        <List isColor={location.pathname === '/'}>
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <Link to="/">
            <span>my habits</span>
          </Link>
        </List>
        <List isColor={location.pathname === '/diarys'}>
          <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
          <Link to="/">
            <span>my diarys</span>
          </Link>
        </List>
        <List isColor={location.pathname === '/boards'}>
          <FontAwesomeIcon icon={faChalkboard}></FontAwesomeIcon>
          <Link to="/">
            <span>Free Board</span>
          </Link>
        </List>
        <List isColor={location.pathname === '/setting'}>
          <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
          <Link to="/setting">
            <span>Setting</span>
          </Link>
        </List>
      </ul>
    </Container>
  );
};

export default Navigator;
