import styled from 'styled-components';
import NavigationButton from './components/NavigationButton';
import { FC } from 'react';

const Login: FC = () => {
  const handleClick = () => {}

  return (
    <Wrapper>
      <Hero>
        <h1>WELCOME TO THE MUSIC CITY</h1>
        <h2>A more exciting way to check your Spotify data.</h2>
        <NavigationButton text='Log In' onClick={handleClick} />
      </Hero>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  h1,
  h2 {
    margin: 0 0 20px 0;
  }
  h1 {
    font-weight: 300;
  }
  h2 {
    font-weight: 300;
  }
  h3 {
    margin: 0 0 10px 0;
    font-size: 24px;
    font-weight: 500;
  }
`;

const Hero = styled.div`
  width: 800px;
  border: 1px solid black;
  border-radius: 3px;
  padding: 40px;
  margin-bottom: 10px;
`;

export default Login;
