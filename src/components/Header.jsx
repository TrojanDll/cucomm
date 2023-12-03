import React, { useState } from "react";
import styled from "styled-components";
import SpriteIcon from "../ui/SpriteIcon";
import CustomButton from "../ui/CustomButton";
import Sidebar from "./Sidebar";

const StyledHeader = styled.header`
  background-color: #ffffff;

  .header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 40px;
    background-color: #ffffff;
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

  .navToggle [class*="bar"] {
    display: block;
    width: 32px;
    height: 1px;
    margin-bottom: 8px;
    background: #222;
    border-radius: 9999px;
    transform: rotate(0deg);
    transition: 0.2s ease all;
    cursor: pointer;
  }

  .navToggle {
    display: none;
    cursor: pointer;
  }

  .navToggle span {
    pointer-events: none;
  }

  .navToggle_opened {
    margin-left: 5px;
  }

  .navToggle_opened .barBot {
    margin-bottom: 0;
  }

  .navToggle_opened .barTop {
    transform: rotate(45deg);
    transform-origin: 6% 15%;
  }

  .navToggle_opened .barMid {
    opacity: 0;
  }

  .navToggle_opened .barBot {
    transform: rotate(-45deg);
    transform-origin: 14% 95%;
    margin-bottom: 10px;
  }

  @media (max-width: 1200px) {
    .header__logo {
      width: 130px;
      height: 36px;
    }

    .header__logo-img {
      width: 130px;
      height: 36px;
    }

    .header__nav {
      column-gap: 28px;
    }

    .header__nav-link {
      font-size: 16px;
    }

    .header__login__btn {
      padding: 10px 24px;
    }
  }

  @media (max-width: 992px) {
    .navToggle {
      display: block;
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
      display: none;
      column-gap: 28px;
    }

    .header__nav-link {
      font-size: 16px;
    }

    .header__login {
      display: none;
    }
  }
`;

const Header = ({ toggleIsPromoFilter }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  function switchSidbar(e) {
    e.target.classList.toggle("navToggle_opened");
    setSidebarOpened(!sidebarOpened);
    toggleIsPromoFilter();
  }

  return (
    <StyledHeader
      style={
        sidebarOpened ? { background: "#ffffff", paddingTop: "116px" } : {}
      }
    >
      <div
        className="header__wrapper"
        style={
          sidebarOpened
            ? {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                background: "#ffffff",
              }
            : {}
        }
      >
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
            primary="true"
            background="var(--main-color)"
            className="header__login__btn header__login__signup-btn"
          >
            Sign up
          </CustomButton>
        </div>

        <div className="navToggle" onClick={switchSidbar}>
          <span className="barTop"></span>
          <span className="barMid"></span>
          <span className="barBot"></span>
        </div>
      </div>

      <Sidebar sidebarOpened={sidebarOpened} />
    </StyledHeader>
  );
};

export default Header;
