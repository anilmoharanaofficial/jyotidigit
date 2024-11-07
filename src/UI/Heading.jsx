import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3.3rem;
      font-weight: 700;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.type === "h4" &&
    css`
      font-size: 28px;
      font-weight: 700;
      line-height: 42px;
      margin-bottom: 1rem;
    `}


    ${(props) =>
    props.type === "h5" &&
    css`
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;
    `}

    ${(props) =>
    props.type === "form" &&
    css`
      margin-top: 2rem;
      font-size: 2rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.type === "extraSmall" &&
    css`
      font-size: 1.7rem;
      font-weight: 500;
      color: var(color-grey-100);
    `}


    ${(props) =>
    props.type === "normal" &&
    css`
      font-size: 1.7rem;
      font-weight: 500;
      color: var(color-grey-100);
    `}
    
  line-height: 1.4;
`;

export default Heading;
