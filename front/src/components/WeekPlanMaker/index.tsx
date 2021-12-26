import React from 'react';
import { Container, WeekPlanUL } from './styles';

const WeekPlanMaker = () => {
  return (
    <Container>
      <WeekPlanUL>
        <li>
          <h2>MONDAY</h2>
          <div className="content"></div>
          <input type="text" placeholder="plan"></input>
        </li>
        <li>
          <h2>TUESDAY</h2>
          <div className="content"></div>
          <input type="text" placeholder="plan"></input>
        </li>
        <li>
          <h2>WEDNESDAY</h2>
          <div className="content"></div>
          <input type="text" placeholder="plan"></input>
        </li>
        <li>
          <h2>THURSDAY</h2>
          <div className="content"></div>
          <input type="text" placeholder="plan"></input>
        </li>
        <li>
          <h2>FRIDAY</h2>
          <div className="content"></div>
          <input type="text" placeholder="plan"></input>
        </li>
        <li>
          <h2>SATURDAY</h2>
          <div className="content"></div>
          <input type="text" placeholder="plan"></input>
        </li>
        <li>
          <h2>SUNDAY</h2>
          <div className="content"></div>
          <input type="text" placeholder="plan"></input>
        </li>
      </WeekPlanUL>
    </Container>
  );
};

export default WeekPlanMaker;
