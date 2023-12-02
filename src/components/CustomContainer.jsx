import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: block;
  margin: 0 auto;
  width: 1280px;
`;

const CustomContainer = (props) => {
  return <StyledContainer {...props} />;
};

export default CustomContainer;
