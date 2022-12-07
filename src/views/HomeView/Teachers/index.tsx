import React from 'react';
import { Wrapper, Image, TextWrapper } from './index.styled';
import image from '@assets/images/marian2.jpg';
import { useMediaQuery } from '../../../app/hooks/useMediaQuery';
// MdSportsKabaddi
const Teachers: React.FC = () => {
  const width = useMediaQuery();
  return (
    <Wrapper>
      <div>
        <TextWrapper>
          <h2>Запознай се с нашият</h2>
          <h1>преподавател</h1>
          {width < 800 && <Image>
            <img src={image} alt='second baner'/>
          </Image>}
          <div>
            <h3>Мариан Джамбазов</h3>
            <p>
            Здравейте на всички! Първо искам да се представя: Аз съм Мариан Джамбазов! На 31 години съм. През годините съм се прибирал, за да прекарвам ваканциите и отпуските си тук със семейството.
            Така се стекоха обстоятелствата, че се върнах да живея тук, където са корените ми.
            </p>
            <p>
            Реших да продължа тук това, с което вече години наред съм се занимавал в Русия, защото това ме кара да се чувствам пълноценен и полезен.
            </p>
            <p>
            Аз съм треньор по спортна борба граплинг и бразилско Жиу Жицу.
            </p>
          </div>
        </TextWrapper>
      </div>
      {width > 800 && <Image>
        <img src={image} alt='second baner'/>
      </Image>
      }
    </Wrapper>

  );
};

export default Teachers;
