import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-color: #f7f9fc;
  padding: 2rem;
`;

const Image = styled.img`
  max-width: 400px;
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
`;

const BackButton = styled(Link)`
  padding: 1rem 2rem;
  background-color: var(--color-brand-800);
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-600);
  }
`;

const PageNotFound = () => {
  return (
    <NotFoundContainer>
      <Image src="/404.svg" alt="Page Not Found Illustration" />
      <SubTitle>Oops! Page Not Found</SubTitle>
      <Message>
        The page you're looking for doesn't exist or has been moved.
      </Message>
      <BackButton to="/">Go Back to Home</BackButton>
    </NotFoundContainer>
  );
};

export default PageNotFound;
