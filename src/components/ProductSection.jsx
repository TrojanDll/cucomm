import React from "react";
import styled from "styled-components";
import CustomContainer from "./CustomContainer";
import CustomSign from "../ui/CustomSign";
import CustomButton from "../ui/CustomButton";
import listPoint from "./../assets/img/icons/list-point.svg";

const StyledProductSection = styled.section`
  padding-top: 112px;
  padding-bottom: 113px;
  background-color: var(--lightest-grey-color);

  .product__sign {
    margin: 0 auto;
  }

  .product__title {
    margin-top: 24px;
    font-size: 48px;
    font-weight: 500;
    line-height: 56px;
    text-align: center;
  }

  .product__list-wrapper {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  }

  .product__list {
  }

  .product__list-item {
    margin-top: 16px;
    display: flex;
    column-gap: 24px;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }

  .product__list-item:first-child {
    margin-top: 0;
  }

  .product__list-item::before {
    content: "";
    display: block;
    margin-top: 8px;
    width: 8px;
    height: 9px;
    background: url(${listPoint}) center center/cover no-repeat;
  }

  .product__btn {
    margin: 0 auto;
    margin-top: 60px;
  }
`;

const ProductSection = () => {
  return (
    <StyledProductSection>
      <CustomContainer>
        <CustomSign className="product__sign" width="85px">
          PRODUCT
        </CustomSign>

        <div className="product__title">Better than competitors</div>

        <div className="product__list-wrapper">
          <ul className="product__list">
            <li className="product__list-item">
              Scaling: Need more leads? Just add FB accounts!
            </li>
            <li className="product__list-item">Trusted accounts in place</li>
            <li className="product__list-item">
              No need to split profiles for each account — use the same
              collection
            </li>
            <li className="product__list-item">Split-test outbound messages</li>
            <li className="product__list-item">
              Split-test appearance of accounts
            </li>
            <li className="product__list-item">CRM in place</li>
          </ul>
          <ul className="product__list">
            <li className="product__list-item">Follow-up sequences</li>
            <li className="product__list-item">
              Free safe built-in anti-detect multi-account browser
            </li>
            <li className="product__list-item">
              Detailed statistics for each day/account (sent, delivered, booked)
            </li>
            <li className="product__list-item">Core auto-updates</li>
            <li className="product__list-item">On-boarding session</li>
            <li className="product__list-item">
              Live-chat, email, and phone support, remote support
            </li>
          </ul>
        </div>

        <CustomButton
          fixedSize="true"
          primary="true"
          width="406px"
          height="64px"
          fontSize="18px"
          fontWeight="600"
          className="product__btn"
        >
          I Want It!
        </CustomButton>
      </CustomContainer>
    </StyledProductSection>
  );
};

export default ProductSection;
