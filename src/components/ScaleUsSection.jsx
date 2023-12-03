import React from "react";
import styled from "styled-components";
import scaleImg from "./../assets/img/scale-us.png";
import listPoint from "./../assets/img/icons/list-point.svg";
import CustomContainer from "./CustomContainer";
import CustomButton from "../ui/CustomButton";
import CustomSign from "./CustomSign";

const StyledScaleUsSection = styled.section`
  background-color: var(--lightest-grey-color);
  padding-top: 170px;

  .scale-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .scale__text-wrapper {
    max-width: 625px;
  }

  .scale__title {
    margin-top: 24px;
    font-size: 48px;
    font-weight: 500;
    line-height: 56px;
  }

  .scale__list {
    margin-top: 40px;
  }

  .scale__list-item {
    margin-top: 16px;
    display: flex;
    align-items: center;
    column-gap: 24px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
  }

  .scale__list-item:first-child {
    margin-top: 0;
  }

  .scale__list-item::before {
    content: "";
    display: block;
    width: 8px;
    height: 9px;
    background: url(${listPoint}) center center/cover no-repeat;
  }

  .scale__buttons {
    margin-top: 40px;
    display: flex;
    column-gap: 16px;
  }
`;

const ScaleUsSection = () => {
  return (
    <StyledScaleUsSection>
      <CustomContainer>
        <div className="scale-wrapper">
          <img src={scaleImg} alt="scale" className="scale__img" />
          <div className="scale__text-wrapper">
            <CustomSign className="scale__sign">SOLUTION</CustomSign>

            <h2 className="scale__title">
              Scale as much as you want without limits
            </h2>

            <ul className="scale__list">
              <li className="scale__list-item">Automated parsing</li>
              <li className="scale__list-item">Targeting</li>
              <li className="scale__list-item">
                Automated cold outreach with follow-ups
              </li>
              <li className="scale__list-item">
                Split-test messages / Facebook accounts
              </li>
              <li className="scale__list-item">CRM</li>
              <li className="scale__list-item">Detailed statistics</li>
              <li className="scale__list-item">
                Multi-account anti-detect browser in place
              </li>
              <li className="scale__list-item">
                Simple straightforward interface
              </li>
            </ul>

            <div className="scale__buttons">
              <CustomButton
                primary="true"
                fixedSize
                width="166px"
                height="64px"
                fontSize="18px"
                className="scale__button"
              >
                Try now
              </CustomButton>
              <CustomButton
                outlined="true"
                fixedSize
                width="166px"
                height="64px"
                fontSize="18px"
                className="scale__button"
              >
                Book a demo
              </CustomButton>
            </div>
          </div>
        </div>
      </CustomContainer>
    </StyledScaleUsSection>
  );
};

export default ScaleUsSection;
