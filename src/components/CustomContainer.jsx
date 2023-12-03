import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: block;
  margin: 0 auto;
  width: 1280px;

  @media (max-width: 1540px) {
    width: 1140px;
  }

  @media (max-width: 1200px) {
    width: 960px;
  }

  @media (max-width: 992px) {
    width: 720px;
  }

  @media (max-width: 768px) {
    width: 540px;
  }

  @media (max-width: 576px) {
    padding-left: 30px;
    padding-right: 30px;
    width: 100%;
  }
`;

const CustomContainer = (props) => {
  return <StyledContainer {...props} />;
};

export default CustomContainer;
