import React from "react";
import styled from "styled-components";
import CustomContainer from "./CustomContainer";
import heartImg from "./../assets/img/heart.png";
import agenciesImg1 from "./../assets/img/agencies-img-1.png";
import agenciesImg2 from "./../assets/img/agencies-img-2.png";
import agenciesImgMan from "./../assets/img/agencies-man-img.jpg";
import SpriteIcon from "../ui/SpriteIcon";

const StyledAgenciesSection = styled.section`
  padding-top: 550px;
  padding-bottom: 112px;
  .agencies__img {
    position: absolute;
    filter: drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.2));
    border-radius: 24px;
  }
  .agencies__img-1 {
    top: -638px;
    left: 0;
    width: 843px;
    height: 436px;
  }

  .agencies__img-2 {
    top: -462px;
    right: 0;
    width: 625px;
    height: 350px;
  }

  .agencies__img-man {
    position: absolute;
    width: 188px;
    height: 188px;
    border-radius: 24px;
    left: 109px;
    top: -242px;
  }

  .agencies__title {
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
    text-align: center;
  }

  .agencies__title img {
    margin-top: 6px;
    height: 34px;
  }

  .agencies__descr {
    margin-top: 16px;
    font-size: 24px;
    text-align: center;
    font-weight: 300;
    line-height: 32px;
  }

  .agencies__list {
    margin-top: 44px;
    display: flex;
    justify-content: space-between;
  }

  .agencies__list-item {
    position: relative;
    width: 298px;
  }

  .agencies__list-item::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    width: 1px;
    height: 168px;
    background: var(--light-grey-color);
  }

  .agencies__list-item:last-child:after {
    display: none;
  }

  .agencies__list-item__img {
    width: 120px;
    height: 112px;
  }

  .agencies__list-item__descr {
    margin-top: 8px;
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
  }
`;

const AgenciesSection = () => {
  return (
    <StyledAgenciesSection>
      <CustomContainer>
        <img
          src={agenciesImg1}
          alt="agenciesImg1"
          className="agencies__img agencies__img-1"
        />
        <img
          src={agenciesImg2}
          alt="agenciesImg2"
          className="agencies__img agencies__img-2"
        />
        <img
          src={agenciesImgMan}
          alt="agenciesImg2"
          className="agencies__img-man"
        />

        <h2 className="agencies__title">
          Built with <img src={heartImg} alt="heart" /> for Marketing Agencies
        </h2>
        <div className="agencies__descr">
          And anyone looking for high-ticket clients
        </div>

        <div className="agencies__list">
          <div className="agencies__list-item">
            <SpriteIcon
              id="icon-targeting-1"
              className="agencies__list-item__img"
            />
            <div className="agencies__list-item__descr">
              Target by demographics <br /> and location
            </div>
          </div>

          <div className="agencies__list-item">
            <SpriteIcon
              id="icon-targeting-2"
              className="agencies__list-item__img"
            />
            <div className="agencies__list-item__descr">
              Target by Job-title (+negative keywords)
            </div>
          </div>

          <div className="agencies__list-item">
            <SpriteIcon
              id="icon-targeting-3"
              className="agencies__list-item__img"
            />
            <div className="agencies__list-item__descr">
              Target by Industry and Interest
            </div>
          </div>

          <div className="agencies__list-item">
            <SpriteIcon
              id="icon-targeting-4"
              className="agencies__list-item__img"
            />
            <div className="agencies__list-item__descr">
              And more! <br /> Lorem ipsum dolor set
            </div>
          </div>
        </div>
      </CustomContainer>
    </StyledAgenciesSection>
  );
};

export default AgenciesSection;
