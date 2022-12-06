import React from 'react';
import { Image, TextWrapper, Button } from './index.styled';
import marian from '@assets/images/marian.jpg';
const HeroBanner: React.FC = () => {
  return (
    <Image>
      <img src={marian} alt='hero baner'/>
      <TextWrapper>
        <h1>Бразилско джиу джицу</h1>
        <h4>Златоград</h4>
        <Button>Запише се</Button>
      </TextWrapper>
    </Image>
  );
};

export default HeroBanner;
