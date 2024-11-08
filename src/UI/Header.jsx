import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";
import MainNav from "./MainNav";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.div`
  margin-top: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  padding: 2.5rem 12rem 2.5rem 12rem;

  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    margin-top: 0rem;
    height: 7rem;
    padding: 0 1rem;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <Logo />
        <Menu>
          <MainNav />
        </Menu>
        <Buttons>
          <Button
            $styles="header"
            $variations="header"
            as={NavLink}
            to="https://wa.me/9853884530?text=Hello%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20services."
          >
            <FaWhatsapp /> +91 9853884530
          </Button>
        </Buttons>
      </StyledHeader>
    </>
  );
}

export default Header;
