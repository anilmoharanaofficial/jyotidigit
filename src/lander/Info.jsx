import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Button from "../UI/Button";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 3rem 5rem;
  border-radius: 15px;
  margin-top: 3.5rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 600px;
  margin-right: 4.5rem;

  @media (max-width: 768px) {
    text-align: center;
    margin-right: 0rem;
    margin-top: 1rem;
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

const ImageWrapper = styled.div`
  position: relative;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 15px;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background-color: rgba(36, 65, 124, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

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

const Info = () => {
  return (
    <Section>
      <ContentWrapper>
        <Heading>A Digital Marketing Agency You Can Trust</Heading>
        <Paragraph>
          Our team of experienced marketers is dedicated to crafting
          personalized campaigns that meet your unique needs. From social media
          management to targeted ad strategies, we help elevate your brand's
          online presence.
        </Paragraph>
        <Paragraph>
          With proven expertise in various channels, we ensure your brand
          connects with the right audience, driving measurable results. Let us
          handle your digital marketing, so you can focus on your core business.
        </Paragraph>
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
      </ContentWrapper>
      <ImageWrapper>
        <Image
          src="https://jyotidigit.com/blog/wp-content/uploads/2024/11/Team-scaled.jpg"
          alt="Marketing strategy"
        />
        {/* <PlayButton>
          <FaPlay color="white" />
        </PlayButton> */}
      </ImageWrapper>
    </Section>
  );
};

export default Info;
