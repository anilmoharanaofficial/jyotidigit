import styled from "styled-components";

const StyledFooter = styled.div`
  margin-top: 5rem;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
  }
`;

const FooterContainer = styled.footer`
  padding: 5rem 12rem 5rem 12rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  color: #2a2a2a;
  font-size: 0.9em;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1.5rem;
    gap: 4rem;
  }
`;

const Column = styled.div`
  padding: 0 20px;
  h3 {
    font-size: 1.2em;
    color: #1a2a6c;
    margin-bottom: 10px;
  }
  p,
  a {
    color: #2a2a2a;
    line-height: 1.6;
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const About = styled.div`
  width: 400px;

  @media (max-width: 768px) {
    width: auto;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  color: #6c757d;
  font-size: 0.9em;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <StyledFooter>
        <FooterContainer>
          <Column>
            <h3>About Us</h3>
            <About>
              <p>
                With cutting-edge technology and a compassionate approach, we
                aim to make your digital marketing experience impactful and
                result-driven.
              </p>
            </About>
          </Column>
          <Column>
            <Contact>
              <div>
                <h3>Call Us</h3>
                <p>+919853884530</p>
              </div>

              <div>
                <h3>Write a Message</h3>
                <a href="mailto:hi@jyotidigit.com">hi@jyotidigit.com</a>
              </div>
            </Contact>
          </Column>
          <Column>
            <h3>Address</h3>
            <p>JyotiDigit Office</p>
            <p>Infocity Avenue,</p>
            <p>Patia, Bhubaneswar, Odisha, 751024</p>
          </Column>
        </FooterContainer>

        <Copyright>© {currentYear} JyotiDigit. All rights reserved.</Copyright>
      </StyledFooter>
    </>
  );
}

export default Footer;
