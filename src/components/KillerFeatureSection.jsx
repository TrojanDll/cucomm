import React from "react";
import styled from "styled-components";
import CustomContainer from "./CustomContainer";
import CustomSign from "../ui/CustomSign";
import featureImg1 from "./../assets/img/feature-img-1.jpg";
import featureImg2 from "./../assets/img/feature-img-2.jpg";

const StyledKillerFeatureSection = styled.section`
  padding-bottom: 152px;
  padding-top: 112px;
  background-color: var(--text-color);

  .feature__sign {
    margin: 0 auto;
  }

  .feature__title {
    margin-top: 24px;
    color: #ffffff;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
  }

  .feature__descr {
    margin-top: 16px;
    color: #ffffff;
    font-weight: 300;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
  }

  .feature__img {
    position: absolute;
    width: 188px;
    height: 188px;
    border-radius: 24px;
  }

  .feature__img-1 {
    left: 0;
    top: -160px;
  }

  .feature__img-2 {
    right: 0;
    bottom: -104px;
  }
`;

const KillerFeatureSection = () => {
  return (
    <StyledKillerFeatureSection>
      <CustomContainer>
        <CustomSign className="feature__sign" width="131px">
          KILLER FEATURE
        </CustomSign>

        <h2 className="feature__title">Common inbox</h2>
        <div className="feature__descr">
          One inbox for all your Facebook accounts
        </div>

        <img
          src={featureImg1}
          alt="man-with-glasses"
          className="feature__img feature__img-1"
        />
        <img
          src={featureImg2}
          alt="woman-with-glasses"
          className="feature__img feature__img-2"
        />
      </CustomContainer>
    </StyledKillerFeatureSection>
  );
};

export default KillerFeatureSection;
