import styled from "styled-components";
import { FaQuoteRight } from "react-icons/fa";

// Styled Components
const StyledTestimonialCard = styled.div`
  background-color: #24417c;
  color: white;
  padding: 2rem 15rem;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 300rem;
  max-width: 100%;
  height: 350px;
  margin: 0 auto;
  position: relative;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
    width: 100%;
    height: 300px;
    gap: 1rem;
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 2px solid #ffffff;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const UserName = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TestimonialContent = styled.div`
  flex: 1;
  max-width: 80%;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const QuoteText = styled.p`
  font-size: 30px;
  line-height: 58px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0 3rem;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
  }
`;

const QuoteIcon = styled(FaQuoteRight)`
  color: #ffe5d9;
  font-size: 40px;
  position: absolute;
  top: 80px;
  right: 180px;

  @media (max-width: 768px) {
    font-size: 30px;
    top: auto;
    right: 200px;
    bottom: 25px;
  }
`;

const TestimonialCard = () => {
  return (
    <StyledTestimonialCard>
      <User>
        <ProfileImage src="/UsersAvatar/User.jpg" alt="User" />
        <UserName>Anil Moharana</UserName>
      </User>
      <TestimonialContent>
        <QuoteText>
          Thanks to the team, I now look forward to my marketing goals, knowing
          they’re in the best hands.
        </QuoteText>
      </TestimonialContent>
      <QuoteIcon />
    </StyledTestimonialCard>
  );
};

export default TestimonialCard;
