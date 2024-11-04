import styled from "styled-components";
import { Container } from "./Container";

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 1rem;
    flex-direction: column;
    padding: 1rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  padding-right: 2rem;
  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-family: "Nunito", sans-serif;
  font-size: 5rem;
  color: #222;
  line-height: 79px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    line-height: 40px;
  }
`;

const Description = styled.p`
  font-family: "Nunito", sans-serif;
  font-style: italic;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 450px;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const GetStartedButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #00c853;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00b248;
  }
`;

const HowItWorksButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: #00c853;
  border: 2px solid #00c853;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #00c853;
    color: #fff;
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 100%;
    flex: none;
  }
`;

const MerchantLabel = styled.div`
  position: absolute;
  top: 10%;
  left: -20%;
  background-color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #222;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;

  @media (max-width: 768px) {
    width: 350px;
  }
`;

function Hero() {
  return (
    <Container>
      <HeroContainer>
        <HeroContent>
          <Title>
            Elevate Your Brand <br /> With Digital Marketing
          </Title>
          <Description>
            Unlock the potential of your business with data-driven digital
            marketing strategies that drive real results. From boosting brand
            awareness to increasing conversions, our team is here to elevate
            your digital presence and help you reach your goals.
          </Description>
          <ButtonGroup>
            <GetStartedButton>Get Started</GetStartedButton>
            <HowItWorksButton>How It Works</HowItWorksButton>
          </ButtonGroup>
        </HeroContent>
        <HeroImageWrapper>
          <MerchantLabel>2k Active Merchants</MerchantLabel>
          <HeroImage src="/hero.svg" alt="Hero" />
        </HeroImageWrapper>
      </HeroContainer>
    </Container>
  );
}

export default Hero;
