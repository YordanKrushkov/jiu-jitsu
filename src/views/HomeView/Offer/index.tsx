import React from 'react';
import { Wrapper, TextWrapper, CardWrapper, Card, Image } from './index.styled';
import image from '@assets/images/children.jpg';
import group from '@assets/images/gropu.jpg';
// MdSportsKabaddi
const Offer: React.FC = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <h2>Нашите услуги</h2>
        <h1>Какво предлагаме</h1>
      </TextWrapper>
      <CardWrapper>
        <Card>
          <Image>
            <img src={image} alt="children" />
          </Image>
          <p>Групови тренировки с деца от 5 до 15 годишна възраст.</p>
        </Card>
        <Card>
          <Image>
            <img src={group} alt="children" />
          </Image>
          <p>Тренировки за лица над 15 годишна възраст, без ограничение във възрастта.</p>
        </Card>
        <Card>
          <Image>
            <img src={image} alt="children" />
          </Image>
          <p>Индивидуални тренировки за малки деца от 4 годишна възраст.</p>
        </Card>
      </CardWrapper>
    </Wrapper>

  );
};

export default Offer;
