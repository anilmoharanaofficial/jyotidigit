import styled, { css } from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import { Container } from "./Container";
import { NavLink } from "react-router-dom";

const position = {
  reverse: css`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-direction: row-reverse;
  `,
};

const StyledFeatueCard = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }

  ${(props) => props.$position && position[props.$position]}
`;

const ImgContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const Img = styled.img`
  height: 500px;
  width: auto;

  @media screen and (max-width: 1024px) {
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
    max-height: 300px;
  }
`;

const Details = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const P = styled.p`
  color: rgb(101, 126, 148);
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

function FeatureCard({ positionType, image, heading, title, description }) {
  let src = image;

  return (
    <Container>
      <StyledFeatueCard $position={positionType}>
        <ImgContainer>
          <Img src={src} alt="Feature Image" loading="lazy" />
        </ImgContainer>
        <Details>
          <Heading type="h4">{heading}</Heading>
          <Heading as="h1">{title}</Heading>
          <P>{description}</P>
          <Button
            $size="hero"
            $variations="hero"
            as={NavLink}
            to="/under-construction"
          >
            Start Invoicing
          </Button>
        </Details>
      </StyledFeatueCard>
    </Container>
  );
}

export default FeatureCard;
