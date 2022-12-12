import React from 'react';
import { Wrapper, Title, Day, Info, AffterText } from './index.styled';
import { timeTable } from '@core/data';

interface Classes {
  time: string
  subject: string
};

const RenderClasses: React.FC<Classes[]> = (classes) => {
  return (
    <>
      {
        classes?.map((x, i) => <Info key={i}>
          <h4>{x.time}</h4>
          <h4>{x.subject}</h4>
        </Info>)
      }
    </>

  );
};

const ScheduleView: React.FC = () => {
  return (
    <Wrapper>
      <Title>График</Title>
      {timeTable.map(x =>
        <Day key={x.day}>
          <h1>{x.day}</h1>
          {RenderClasses(x.classes)}
        </Day>
      )}
      <AffterText>**Всички занятия се провеждат в залата за борба на градски стадион Златоград**</AffterText>
    </Wrapper>
  );
};

export default ScheduleView;
