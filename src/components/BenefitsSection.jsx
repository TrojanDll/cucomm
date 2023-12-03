import React from "react";
import styled from "styled-components";
import CustomContainer from "./CustomContainer";
import SpriteIcon from "../ui/SpriteIcon";

const StyledBenefitsSection = styled.section`
  padding-top: 112px;
  background-color: var(--lightest-grey-color);

  .benefits {
    padding: 88px 109px;
    width: 100%;
    min-height: 516px;
    border-radius: 24px;
    background: #fff;
    filter: drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.2));
  }

  .benefits__title {
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
    text-align: center;
  }

  .benefits__descr {
    margin-top: 16px;
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    text-align: center;
  }

  .benefits__list {
    margin-top: 44px;
    display: flex;
    justify-content: space-between;
  }

  .benefits__list-item {
    width: 189px;
  }

  .benefits__list-item__img {
    display: block;
    margin: 0 auto;
    width: 140px;
    height: 112px;
  }

  .benefits__list-item__text {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
  }
`;

const BenefitsSection = () => {
  return (
    <StyledBenefitsSection>
      <CustomContainer>
        <div className="benefits">
          <h2 className="benefits__title">Better than manual</h2>
          <div className="benefits__descr">
            You spend 4 times less time and get 7 times more leads compared to
            manual!
          </div>

          <div className="benefits__list">
            <div className="benefits__list-item">
              <SpriteIcon
                id="icon-benefits-1"
                className="benefits__list-item__img"
              />
              <div className="benefits__list-item__text">
                Saves you up to 75% of time on messaging your clients
              </div>
            </div>

            <div className="benefits__list-item">
              <SpriteIcon
                id="icon-benefits-2"
                className="benefits__list-item__img"
              />
              <div className="benefits__list-item__text">
                Saves you 100% of time on statistics gathering
              </div>
            </div>

            <div className="benefits__list-item">
              <SpriteIcon
                id="icon-benefits-3"
                className="benefits__list-item__img"
              />
              <div className="benefits__list-item__text">
                Doesn’t visit the same profiles again and again
              </div>
            </div>

            <div className="benefits__list-item">
              <SpriteIcon
                id="icon-benefits-4"
                className="benefits__list-item__img"
              />
              <div className="benefits__list-item__text">
                Allows to work from 7+ accounts at the same time
              </div>
            </div>

            <div className="benefits__list-item">
              <SpriteIcon
                id="icon-benefits-5"
                className="benefits__list-item__img"
              />
              <div className="benefits__list-item__text">
                Doesn’t message the same people from different accounts
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </StyledBenefitsSection>
  );
};

export default BenefitsSection;
