import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;

  @media screen and (max-width: 768px) {
  }
`;

const Img = styled.img`
  margin-top: 0.6rem;
  height: 50px;
  width: 170px;
`;

function Logo() {
  return (
    <StyledLogo>
      <NavLink to="/">
        <Img src="/Images/JyotiDigit_Main.svg" alt="Logo" />
      </NavLink>
    </StyledLogo>
  );
}

export default Logo;
