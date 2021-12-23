import HabitMaker from '@components/HabitMaker';
import React, { useCallback, useState } from 'react';
import { Container, DayBox, HabitWrapper, OutUL, WeekWrapper } from './styles';

const Setting = () => {
  const [habitMaker, setHabitMaker] = useState(false);

  const onHabitMakeClick = useCallback(() => {
    setHabitMaker((state) => !state);
  }, []);

  return (
    // <Container>
    //   <OutUL>
    //     <li>
    //       <DayBox>
    //         <header>Time</header>
    //       </DayBox>
    //     </li>
    //     <li>
    //       <DayBox>
    //         <header>MON</header>
    //       </DayBox>
    //     </li>
    //     <li>
    //       <DayBox>
    //         <header>TUE</header>
    //       </DayBox>
    //     </li>
    //     <li>
    //       <DayBox>
    //         <header>WED</header>
    //       </DayBox>
    //     </li>
    //     <li>
    //       <DayBox>
    //         <header>THU</header>
    //       </DayBox>
    //     </li>
    //     <li>
    //       <DayBox>
    //         <header>FRI</header>
    //       </DayBox>
    //     </li>
    //     <li>
    //       <DayBox>
    //         <header>SAT</header>
    //       </DayBox>
    //     </li>
    //     <li>
    //       <DayBox>
    //         <header>SUN</header>
    //       </DayBox>
    //     </li>
    //   </OutUL>
    // </Container>

    <Container>
      <HabitWrapper>
        <header>
          <h2>habits</h2>
          <button onClick={onHabitMakeClick}>습관만들기</button>
          {habitMaker ? <HabitMaker setHabitMaker={setHabitMaker}></HabitMaker> : ''}
        </header>
      </HabitWrapper>
      <WeekWrapper></WeekWrapper>
    </Container>
  );
};

export default Setting;
