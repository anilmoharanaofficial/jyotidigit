import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 2.2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 1.5rem;
    transition: all 0.3s;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
      padding: 1rem;
    }
  }

  /* &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-brand-800);

    @media screen and (max-width: 768px) {
      color: var(--color-brand-600);
    }
  } */
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="#">Services</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="#">About</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="#">Contact</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="#">Blog</StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
