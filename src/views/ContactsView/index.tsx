import { Map, Description, Wrapper, Form, Input, TextArea, Button, SocialWrapper, Social } from './index.styled';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import React, { useRef, useEffect } from 'react';
const ContactView: React.FC = () => {
  const formRef = useRef(null);
  useEffect(() => {
    if (formRef.current) {
      (formRef.current as HTMLFormElement).scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const navigateTo = (url: string): void => {
    window.open(url, '_blank');
  };

  const sendEmail = (e: any): void => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_NAME as string, process.env.REACT_APP_TEMPLATE as string, e.target, process.env.REACT_APP_USER as string)
      .then(() => {
      }, (error: any) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <>
      <Map>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23949.601950226697!2d25.050417579101566!3d41.380596900000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14adb087772248c1%3A0xe6feb1f0542c4678!2z0KHRgtCw0LTQuNC-0L0g0JfQu9Cw0YLQvtCz0YDQsNC0!5e0!3m2!1sen!2sbg!4v1670872091897!5m2!1sen!2sbg"
          width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          id='map'
        >
        </iframe>
      </Map>
      <Wrapper justify={'flex-start'} width={80}>

        <Description>
            Имате въпроси или просто искате да опитате, моля свържете се с нас!
        </Description>
      </Wrapper>
      <Wrapper justify={'space-between'} width={80}>
        <Form ref={formRef} onSubmit={sendEmail}>
          <Wrapper justify={'center'}>
            <Input type='text' id='name' name="name" placeholder='Име'/>
            <Input type='email' id='email' name="email" placeholder='Email'/>
          </Wrapper>
          <Input type='text' id='subject' name='subject' placeholder='Subject'/>
          <TextArea id='message' placeholder='Message' name='message'></TextArea>
          <Button>Send</Button>
        </Form>
        <SocialWrapper>
          <p>Follow Me</p>
          <Social>
            <FaFacebook onClick={() => navigateTo('https://www.facebook.com/krushkov.yordan/')}/>
            <FaTwitter onClick={() => navigateTo('https://twitter.com/yordankrushkov')}/>
            <FaInstagram onClick={() => navigateTo('https://instagram.com/yordankrushkov')}/>
            <FaLinkedinIn onClick={() => navigateTo('https://www.linkedin.com/in/yordan-krushkov/')}/>
            <FaGithub onClick={() => navigateTo('https://github.com/YordanKrushkov')}/>
          </Social>
        </SocialWrapper>
      </Wrapper>

    </>
  );
};

export default ContactView;
