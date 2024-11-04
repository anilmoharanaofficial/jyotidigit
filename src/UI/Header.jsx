import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import MainNav from "./MainNav";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  padding: 2.5rem 18rem 2.5rem 18rem;

  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media screen and (max-width: 768px) {
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
          <Button $styles="contact" $variations="contact" as={NavLink} to="/">
            Contact
          </Button>
        </Buttons>
      </StyledHeader>
    </>
  );
}

export default Header;
