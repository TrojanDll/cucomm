import React from "react";
import styled from "styled-components";
import SpriteIcon from "../ui/SpriteIcon";
import CustomButton from "../ui/CustomButton";

const StyledHeader = styled.header`
  .header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 40px;
  }

  .header__logo {
    width: 186px;
    height: 52px;
  }

  .header__logo-img {
    width: 186px;
    height: 52px;
  }

  .header__nav {
    display: flex;
    column-gap: 32px;
  }

  .header__nav-link {
    display: block;
    color: var(--text-color);
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="header__wrapper">
        <div className="header__logo">
          <SpriteIcon id="icon-logo" className="header__logo-img" />
        </div>

        <nav className="header__nav">
          <a href="#" className="header__nav-link">
            Download
          </a>
          <a href="#" className="header__nav-link">
            Products
          </a>
          <a href="#" className="header__nav-link">
            Help Desk
          </a>
          <a href="#" className="header__nav-link">
            Videos
          </a>
          <a href="#" className="header__nav-link">
            Blog
          </a>
          <a href="#" className="header__nav-link">
            Client Area
          </a>
        </nav>

        <div className="header__login">
          <CustomButton
            color="black"
            fontWeight="400"
            className="header__login__btn header__login__login-btn"
          >
            Log in
          </CustomButton>

          <CustomButton
            primary
            background="var(--main-color)"
            className="header__login__btn header__login__signup-btn"
          >
            Sign up
          </CustomButton>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
