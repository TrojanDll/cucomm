import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: ${({ padding }) => padding || "12px 32px"};
  border-radius: 9999px;
  font-weight: ${({ fontWeight }) => fontWeight || "500"};
  color: ${({ color }) => color || "white"};
  font-size: ${({ fontSize }) => fontSize || "18px"};

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.primary &&
    css`
      color: ${props.color || "white"};
      background: ${props.background || "var(--main-color)"};

      &:hover {
        background: ${props.backgroundHover || "var(--hover-color)"};
      }
    `}

  ${(props) =>
    props.outlined &&
    css`
      color: ${props.color || "var(--main-color)"};
      background: transparent;
      border: 1px solid ${props.borderColor || "var(--main-color)"};

      &:hover {
        border-color: ${props.borderHover || "var(--hover-color)"};
        color: ${props.hoverColor || "var(--hover-color)"};
      }
    `}
  
    ${(props) =>
    props.fixedSize &&
    css`
      padding: 0;
      width: ${props.width || "100px"};
      height: ${props.height || "100px"};
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

const CustomButton = (props) => {
  return <StyledButton {...props} />;
};

export default CustomButton;
