import styled from "styled-components";
import { Container } from "../UI/Container";
import ServiceCards from "../UI/ServiceCards";

const StyledServices = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.h2`
  color: #0f3460;
  line-height: 53px;
  font-size: 35px;
  font-weight: 700;
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
  margin-bottom: 16px;
  line-height: 26px;
  text-align: center;
  padding: 0 20rem 0 20rem;

  @media (max-width: 768px) {
    font-size: 0.9em;
    margin-bottom: 1.5rem;
    padding: 0 1rem 0 1rem;
  }
`;

function Services() {
  return (
    <Container>
      <StyledServices>
        <Heading>Our Services</Heading>
        <Subtitle>
          Unlock your brand's potential with tailored strategies and effective
          online campaigns. Let us help you reach your target audience, increase
          engagement, and drive growth without breaking the bank.
        </Subtitle>
      </StyledServices>

      <ServiceCards />
    </Container>
  );
}

export default Services;
