import styled, { css } from "styled-components";

const styles = {
  contact: css`
    text-transform: uppercase;
    text-align: center;
    font-size: 1.4rem;
    padding: 0.9rem 1.2rem;
    font-weight: 500;
  `,

  signup: css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.4rem;
    padding: 0.9rem 1.2rem;
    font-weight: 500;

    @media screen and (max-width: 768px) {
      display: none;
    }
  `,

  CTAButton: css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.4rem;
    padding: 1.4rem 1.2rem;
    font-weight: 500;

    @media (max-width: 768px) {
      justify-content: center;
      padding: 1.8rem 1.2rem;
    }
  `,
};

const sizes = {
  extraSmall: css`
    font-size: 1.2rem;
    padding: 0.9rem 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;

    @media screen and (max-width: 768px) {
      margin-right: 0.6rem;
      margin-top: 0.6rem;
      margin-left: 0.6rem;
      width: 95%;
    }
  `,

  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,

  items: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
    margin-right: 0.6rem;
    margin-top: 0.7rem;
    margin-left: 0.6rem;
    margin-bottom: 0.6rem;
  `,

  hero: css`
    font-family: "Nunito", sans-serif;
    font-size: 1.9rem;
    padding: 1.2rem 5.4rem;
    font-weight: 500;
  `,
};

const display = {
  flex: css`
    display: flex;
    align-items: center;
    gap: 0.1rem;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,

  items: css`
    color: var(--color-red-100);
    background-color: var(--color-grey-800);

    &:hover {
      background-color: var(--color-black);
    }
  `,

  hero: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,

  contact: css`
    color: var(--color-grey-0);
    background-color: var(--color-green-600);
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.$size]}
  ${(props) => variations[props.$variations]}
  ${(props) => display[props.$display]}
  ${(props) => styles[props.$styles]}
`;

Button.defaultProps = {
  $variations: "primary",
  $size: "medium",
};

export default Button;
