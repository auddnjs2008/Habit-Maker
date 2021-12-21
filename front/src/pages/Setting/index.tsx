import React from 'react';
import { Container, DayBox, OutUL } from './styles';

const Setting = () => {
  return (
    <Container>
      <OutUL>
        <li>
          <DayBox>
            <header>MON</header>
          </DayBox>
        </li>
        <li>
          <DayBox>
            <header>TUE</header>
          </DayBox>
        </li>
        <li>
          <DayBox>
            <header>WED</header>
          </DayBox>
        </li>
        <li>
          <DayBox>
            <header>THU</header>
          </DayBox>
        </li>
        <li>
          <DayBox>
            <header>FRI</header>
          </DayBox>
        </li>
        <li>
          <DayBox>
            <header>SAT</header>
          </DayBox>
        </li>
        <li>
          <DayBox>
            <header>SUN</header>
          </DayBox>
        </li>
      </OutUL>
    </Container>
  );
};

export default Setting;
