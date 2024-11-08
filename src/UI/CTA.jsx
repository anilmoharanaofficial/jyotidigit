import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { Container } from "./Container";

const FeatureSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #24417c;
  border-radius: 25px;
  padding: 7rem 20rem;
  color: white;
  margin-top: 3rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 2rem 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 500px;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const Heading = styled.h2`
  font-size: 28px;
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 24px;
  }
`;

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 13px;
  }
`;

const StatsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Stat = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #c8d3e9;
`;

const CallButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.8rem 6rem 1.8rem 6rem;
  font-size: 15px;
  font-weight: bold;
  color: #24417c;
  background-color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 3rem;

  &:hover {
    background-color: #f1f1f1;
  }

  & > svg {
    margin-left: 0.5rem;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: 3rem;
  }
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin-top: 2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function CTA() {
  return (
    <Container>
      <FeatureSection>
        <ContentWrapper>
          <Heading>Grow Your Brand with Proven Marketing Strategies</Heading>
          <Paragraph>
            Our team of skilled digital marketers provides comprehensive
            strategies tailored to meet your business goals, from boosting
            engagement to driving conversions. Let’s make your brand shine
            online.
          </Paragraph>
          <StatsWrapper>
            <Stat>
              <StatValue>2,500+</StatValue>
              <StatLabel>Projects Completed</StatLabel>
            </Stat>
            <Stat>
              <StatValue>850+</StatValue>
              <StatLabel>Happy Clients</StatLabel>
            </Stat>
            <Stat>
              <StatValue>320K</StatValue>
              <StatLabel>Leads Generated</StatLabel>
            </Stat>
          </StatsWrapper>
          <a
            href="https://calendly.com/jyotidigit/jyoti-ranjan"
            target="_blank"
          >
            <CallButton>
              BOOK APPOINTMENT <FaArrowRight />
            </CallButton>
          </a>
        </ContentWrapper>
        <ImageWrapper>
          <Image src="/Team/Team00.webp" alt="Digital marketing team" />
        </ImageWrapper>
      </FeatureSection>
    </Container>
  );
}

export default CTA;
