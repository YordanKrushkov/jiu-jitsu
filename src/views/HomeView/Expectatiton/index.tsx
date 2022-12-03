import React from 'react';
import { Wrapper, Image, TextWrapper, Card, Icon } from './index.styled';
import image from '@assets/images/1.png';
import { GiHighKick } from 'react-icons/gi';
import { IoFitness } from 'react-icons/io5';
import { IoMdFitness } from 'react-icons/io';
// MdSportsKabaddi
const Expectation: React.FC = () => {
  return (
    <Wrapper>
      <Image>
        <img src={image} alt='second baner'/>
      </Image>
      <div>
        <TextWrapper>
          <h2>Какво да очаквам от моите</h2>
          <h1>ТРЕНИРОВКИ?</h1>
        </TextWrapper>
        <Card>
          <Icon>
            <GiHighKick/>
          </Icon>
          <div>
            <h1>Самозащита</h1>
            <p>Редовните сесии по BJJ ви обучават да се защитавате срещу нападатели.
            Това бойно изкуство позволява на по-слабите и по-малки противници да доминират над по-големите.</p>
          </div>
        </Card>
        <Card>
          <Icon second>
            <IoMdFitness/>
          </Icon>
          <div>
            <h1>Физическа форма</h1>
            <p>
              Повишава вашата физическа форма и работи за всички типове тяло.
              Осигурява необходимата сила, за да постигнете желаните умения и ниво на фитнес. Тренировъчните сесии са забавни и ангажиращи.
              Бразилското жиу-джицу ви въвежда във форма, докато усвоявате ефективни животоспасяващи умения.</p>
          </div>
        </Card>
        <Card>
          <Icon>
            <IoFitness/>
          </Icon>
          <div>
            <h1>Характер</h1>
            <p>
            Докато тренирате бразилско жиу-джицу, вие се излагате на различни видове емоции, като гняв и безпокойство, което ви прави физически и психически по-силен.
            Научавате се да приемате или да се справяте с провала и да продължите напред.
            Обучението предлага изключителни преживявания, които предизвикват богати, но фини психологически промени в практикуващите, като ви насърчават да продължите да се връщате на тепиха.</p>
          </div>
        </Card>
      </div>
    </Wrapper>

  );
};

export default Expectation;
