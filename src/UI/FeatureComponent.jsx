import styled from "styled-components";
import { FaPlay, FaCheck } from "react-icons/fa";
import Button from "./Button";
import { GoArrowUpRight } from "react-icons/go";

const FeatureSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 3rem 5rem;
  border-radius: 15px;
  margin-top: 3.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }
`;

const TextWrapper = styled.div`
  max-width: 600px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Heading = styled.h2`
  font-size: 30px;
  line-height: 1.3;
  font-weight: 700;
  color: #24417c;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 25px;
    line-height: 1.5;
  }
`;

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #24417c;
  margin-bottom: 0.5rem;

  & > svg {
    color: #24417c;
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 14px;
    margin-top: 1rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 600px;
  margin-right: 4.5rem;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-right: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 15px;
`;

// const PlayButton = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 50px;
//   height: 50px;
//   background-color: rgba(36, 65, 124, 0.8);
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     width: 40px;
//     height: 40px;
//   }
// `;

const ButtonGroup = styled.div`
  padding-top: 2rem;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const FeatureComponent = () => {
  return (
    <FeatureSection>
      <ImageWrapper>
        <Image
          src="https://jyotidigit.com/blog/wp-content/uploads/2024/11/Team2-scaled.jpg"
          alt="Digital marketing strategy"
        />
        {/* <PlayButton>
          <FaPlay color="white" />
        </PlayButton> */}
      </ImageWrapper>
      <TextWrapper>
        <Heading>We Can Help You Grow Your Business</Heading>
        <Paragraph>
          Our dedicated team of marketing experts is ready to help your brand
          achieve measurable success. From SEO to social media, we provide
          comprehensive services tailored to your business goals.
        </Paragraph>
        <FeatureList>
          <FeatureItem>
            <FaCheck /> Expert Marketers
          </FeatureItem>
          <FeatureItem>
            <FaCheck /> Data-Driven Strategies
          </FeatureItem>
          <FeatureItem>
            <FaCheck /> Proven Results
          </FeatureItem>
        </FeatureList>
        <ButtonGroup>
          <a
            href="https://calendly.com/jyotidigit/jyoti-ranjan"
            target="_blank"
          >
            <Button $styles="Feature" $variations="hero">
              Book a call <GoArrowUpRight />
            </Button>
          </a>
        </ButtonGroup>
      </TextWrapper>
    </FeatureSection>
  );
};

export default FeatureComponent;
