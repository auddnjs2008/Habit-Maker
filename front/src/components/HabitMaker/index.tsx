import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useInput from '@hooks/useInput';
import { useMakeHabit } from '@utils/api/habitApi';
import { useUserInfo } from '@utils/api/userApi';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Container, FormWrapper } from './styles';

interface IHabitMaker {
  setHabitMaker: React.Dispatch<React.SetStateAction<boolean>>;
}

const HabitMaker: FC<IHabitMaker> = ({ setHabitMaker }) => {
  const [title, setTitle, onTitleChange] = useInput('');
  const [color, setColor, onColorChange] = useInput('#000000');
  const [memo, setMemo, onMemoChange] = useInput('');
  const [alarm, setAlarm] = useState(false);
  const [cycle, setCycle] = useState('day');
  const [cycleValue, setCycleValue] = useState(0);
  const { data: user } = useUserInfo();

  const onCloseHabitMaker = useCallback(() => {
    setHabitMaker((state) => !state);
  }, []);

  const onClickBackCloseHabitMaker = useCallback((e) => {
    if (e.target === e.currentTarget) {
      setHabitMaker((state) => !state);
    }
  }, []);

  const onAlarmClick = useCallback(() => {
    setAlarm((state) => !state);
  }, []);

  const onCycleChange = useCallback((e) => {
    setCycle(e.target.value);
  }, []);

  const onCycleValueChange = useCallback((e) => {
    setCycleValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (title === '') {
        alert('제목 써주세요');
        return;
      }
      useMakeHabit({ title, color, memo, alarm, cycle, cycleValue, username: user.username }).then((result) => {
        if (result.type === 'SUCCESS') {
          onCloseHabitMaker();
        } else {
          //에러처리
        }
      });
    },
    [title, color, memo, alarm, cycle, cycleValue],
  );

  return (
    <Container onClick={onClickBackCloseHabitMaker}>
      <FormWrapper>
        <header>
          <h2>
            <FontAwesomeIcon icon={faArrowLeft} onClick={onCloseHabitMaker}></FontAwesomeIcon>
            <span>습관 만들기</span>
          </h2>
          <button onClick={onSubmit}>save</button>
        </header>
        <form>
          <div>
            <span>제목</span>
            <input type="text" placeholder="ex: 30쪽 책읽기" value={title} onChange={onTitleChange}></input>
          </div>
          <div className="color">
            <span>색깔</span>
            <input type="color" value={color} onChange={onColorChange}></input>
          </div>
          <div>
            <span>빈도</span>
            <div className="selectes">
              <select onChange={onCycleChange}>
                <option value="day">매일</option>
                <option value="week">매주</option>
                <option value="month">매달</option>
              </select>

              {cycle !== 'day' ? (
                <>
                  <select onChange={onCycleValueChange}>
                    {cycle === 'week'
                      ? [...Array(7)].map((v, i) => i + 1).map((item) => <option key={item}>{item}</option>)
                      : [...Array(31)].map((v, i) => i + 1).map((item) => <option key={item}>{item}</option>)}
                  </select>
                  <span>일</span>
                </>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="notify">
            <span>알림</span>
            <input type="checkbox" onClick={onAlarmClick}></input>
          </div>
          <div>
            <span>메모</span>
            <input type="text" value={memo} onChange={onMemoChange}></input>
          </div>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default HabitMaker;
