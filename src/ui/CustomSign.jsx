import React from "react";
import styled from "styled-components";

const StyledCustomSign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  text-transform: uppercase;
  font-family: "BarlowCondensed";
  letter-spacing: 1.4px;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "40px"};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  font-weight: ${({ fontWeight }) => fontWeight || "500"};
  color: ${({ color }) => color || "var(--main-color)"};
  background: ${({ background }) => background || "#ffffff"};
  padding: ${({ padding }) => padding || "0 16px"};
`;

const CustomSign = (props) => {
  return <StyledCustomSign {...props} />;
};

export default CustomSign;
