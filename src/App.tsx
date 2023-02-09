import React from 'react';
import styled from "styled-components";
import img from './images/bg-main-desktop.png'
import GlobalStyle from "./styles/global";
import Content from "./components/Content";


const App: React.FC = () => (
    <Wrapper>
        <GlobalStyle />
        <BackgroundImage></BackgroundImage>
        <Content />
    </Wrapper>
)

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  background-color: var(--color-bg);
  font-size: 18px;
  font-family: 'Space Grotesk', sans-serif;
`

const BackgroundImage = styled.div`
  background-size: auto;
  background-image: url(${img});
  width: 30%;
  height: 100%;

  @media (max-width: 930px) {
    position: absolute;
    bottom: 370px;
    width: 100%;
    
  } 
  @media (max-width: 500px) {
  bottom: 400px;
    
  }
`

export default App;
