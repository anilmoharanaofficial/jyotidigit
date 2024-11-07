import styled from "styled-components";
import { Container } from "./Container";
import Button from "./Button";
import { GoArrowUpRight } from "react-icons/go";

const StyledHero = styled.div`
  background-color: #f7faff;
  border-radius: 20px 20px 0 0;
  padding: 40px 20px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300rem;
  margin: auto;

  @media (max-width: 768px) {
    padding: 20px;
    padding-bottom: 0px;
  }
`;

const Section = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 2rem;
  margin-left: 4rem;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-left: 0rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const Heading = styled.h1`
  color: #0f3460;
  line-height: 1.2;
  font-size: 50px;
  font-weight: 800;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-top: 1rem;
    font-size: 30px;
    line-height: 1.4;
  }
`;

const Subtitle = styled.p`
  color: #5a5a89;
  font-size: 1em;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9em;
    margin-bottom: 1.5rem;
  }
`;

const ButtonGroup = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const PartnerLogos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #0f3460;
  padding: 40px;
  border-radius: 0 0 20px 20px;
  width: 100%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
    gap: 1rem;
    justify-items: center;
  }
`;

const PartnerLogo = styled.div`
  color: #ffffff;
  font-size: 1.2em;
  font-weight: bold;
  opacity: 0.7;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const HeroImage = styled.img`
  max-width: 80%;
  height: auto;
  border-radius: 8px;
  display: block;
  z-index: 2;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const BackgroundCircle = styled.div`
  width: 500px;
  height: 500px;
  background-color: #f9e5df;
  border-radius: 50%;
  position: absolute;
  top: 55%;
  left: 45%;
  transform: translate(-50%, -50%);
  z-index: 1;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
  }
`;

const TrustedSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
  }
`;

const UserImageContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #e4f0fc;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #fff;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const TrustedText = styled.p`
  color: #5a5a89;
  font-size: 0.9em;
  margin-left: 10px;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

function Hero() {
  return (
    <Container>
      <StyledHero>
        <Section>
          <LeftSection>
            <Heading>
              Your Trusted Partner for Digital Marketing Success
            </Heading>
            <Subtitle>
              Grow your brand and reach new heights with our expert digital
              marketing solutions.
            </Subtitle>
            <ButtonGroup>
              <Button $styles="hero" $variations="hero">
                Book a call <GoArrowUpRight />
              </Button>
            </ButtonGroup>
            <TrustedSection>
              <div>
                <UserImageContainer>
                  <UserImage src="/UsersAvatar/1.jpg" alt="User 1" />
                </UserImageContainer>
                <UserImageContainer>
                  <UserImage src="/UsersAvatar/2.jpg" alt="User 2" />
                </UserImageContainer>
                <UserImageContainer>
                  <UserImage src="/UsersAvatar/3.jpg" alt="User 3" />
                </UserImageContainer>
                <UserImageContainer>
                  <UserImage src="/UsersAvatar/4.jpg" alt="User 4" />
                </UserImageContainer>
              </div>
              <TrustedText>
                Trusted by 15K+ people <br /> around the globe
              </TrustedText>
            </TrustedSection>
          </LeftSection>
          <RightSection>
            <BackgroundCircle />
            <HeroImage src="/Img.png" alt="Hero" />
          </RightSection>
        </Section>
      </StyledHero>
      <PartnerLogos>
        <PartnerLogo>BrandOne</PartnerLogo>
        <PartnerLogo>DigitPro</PartnerLogo>
        <PartnerLogo>Marketly</PartnerLogo>
        <PartnerLogo>AdVentures</PartnerLogo>
        <PartnerLogo>SocialHub</PartnerLogo>
        <PartnerLogo>Boostify</PartnerLogo>
      </PartnerLogos>
    </Container>
  );
}

export default Hero;
