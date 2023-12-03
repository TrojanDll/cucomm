import React from "react";
import styled from "styled-components";
import CustomButton from "../ui/CustomButton";
import promoImg1 from "./../assets/img/promo-img-1.png";
import promoImg2 from "./../assets/img/promo-img-2.png";
import CustomContainer from "./CustomContainer";

const StyledPromoSection = styled.section`
  padding-bottom: 128px;
  position: relative;
  display: flex;

  .promo__title-wrapper {
    margin-top: 32px;
    width: 516px;
  }

  .promo__title {
    font-size: 64px;
    font-weight: 500;
    line-height: 72px;
  }

  .promo__descr {
    margin-top: 32px;
    font-size: 24px;
    line-height: 32px;
    font-weight: 300;
  }

  .promo__descr span {
    font-weight: 500;
  }

  .promo__buttons {
    margin-top: 40px;
    display: flex;
    column-gap: 16px;
  }

  .promo__imgs {
    position: relative;
    top: 0;
    right: 0;
    width: 854px;
  }

  .promo__img-1 {
    border-radius: 24px;
    position: absolute;
    top: 0;
    right: 0;
    width: 625px;
    height: 378px;
    filter: drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.2));
  }

  .promo__img-2 {
    position: absolute;
    right: 109px;
    top: 298px;
    border-radius: 24px;
    width: 625px;
    height: 280px;
    filter: drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.2));
  }

  @media (max-width: 1350px) {
    flex-wrap: wrap;
    padding-bottom: 64px;

    .promo__title-wrapper {
      order: 2;
      margin: 0 auto;
    }

    .promo__title {
      text-align: center;
    }

    .promo__descr {
      text-align: center;
    }

    .promo__buttons {
      justify-content: center;
    }

    .promo__imgs {
      height: 640px;
      margin: 0 auto;
      order: 1;
    }

    .promo__img-1 {
      /* right: auto; */
      /* left: 50%;
      transform: translateX(-30%); */
    }
  }

  @media (max-width: 992px) {
    .promo__imgs {
      height: 395px;
    }

    .promo__img-1 {
      width: 375px;
      height: 226px;
      right: 141px;
      filter: drop-shadow(0px 8.605px 25.815px rgba(0, 48, 71, 0.2));
    }

    .promo__img-2 {
      top: 202px;
      right: 207px;
      width: 375px;
      height: 168px;
      filter: drop-shadow(0px 8.605px 25.815px rgba(0, 48, 71, 0.2));
      transition: all 0.3s;
    }

    .promo__title {
      font-size: 48px;
      line-height: 56px;
    }

    .promo__descr {
      margin-top: 24px;
      font-size: 22px;
      line-height: 30px;
    }
  }

  @media (max-width: 768px) {
    .promo__img-1 {
      width: 375px;
      height: 226px;
      right: 44px;
    }

    .promo__img-2 {
      top: 202px;
      right: 110px;
      width: 375px;
      height: 168px;
    }

    .promo__title {
      font-size: 44px;
      line-height: 52px;
    }
  }

  @media (max-width: 576px) {
    .promo__title-wrapper {
      width: 100%;
    }

    .promo__imgs {
      height: 266px;
    }
    .promo__img-1 {
      border-radius: 8px;
      width: 268px;
      height: 162px;
      right: auto;
      left: calc(50% + 24px);
      transform: translateX(-50%);
    }

    .promo__img-2 {
      border-radius: 8px;
      width: 268px;
      height: 120px;
      top: 145px;
      right: auto;
      left: calc(50% - 24px);
      transform: translateX(-50%);
    }

    .promo__title {
      margin-top: 40px;
      font-size: 40px;
      line-height: 48px;
    }

    .promo__descr {
      margin-top: 16px;
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
    }

    .promo__descr span {
      font-weight: 600;
    }

    .promo__buttons {
      margin-top: 24px;
      display: block;
    }

    .promo__button {
      margin: 0 auto;
      font-size: 18px;
    }

    .promo__button:last-child {
      margin-top: 16px;
    }
  }
`;

const PromoSection = ({ isPromoFilter }) => {
  return (
    <CustomContainer>
      <StyledPromoSection>
        <div className="promo__title-wrapper">
          <h1 className="promo__title">Uncover tons of leads on scale</h1>
          <div className="promo__descr">
            Leverage a <span>huge 3.8 billion leads database</span> by sending
            hundreds of messages on Facebook every day completely on autopilot
          </div>

          <div className="promo__buttons">
            <CustomButton
              primary="true"
              fixedSize
              width="216px"
              height="72px"
              fontSize="24px"
              className="promo__button"
            >
              Try now
            </CustomButton>
            <CustomButton
              outlined="true"
              fixedSize
              width="216px"
              height="72px"
              fontSize="24px"
              className="promo__button"
            >
              Book a demo
            </CustomButton>
          </div>
        </div>

        <div className="promo__imgs">
          <img
            style={isPromoFilter ? {} : { filter: "none" }}
            className="promo__img promo__img-1"
            src={promoImg1}
            alt="promo-image"
          />
          <img
            className="promo__img promo__img-2"
            src={promoImg2}
            alt="promo-image"
          />
        </div>
      </StyledPromoSection>
    </CustomContainer>
  );
};

export default PromoSection;
