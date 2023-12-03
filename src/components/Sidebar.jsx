import React from "react";
import styled from "styled-components";
import CustomButton from "../ui/CustomButton";

const StyledSidebar = styled.header`
  position: fixed;
  padding-bottom: 48px;
  overflow-y: scroll;
  top: 104px;
  /* left: -100%; */
  height: calc(100% - 104px);
  width: 100%;
  transition: left 0.3s;

  .sidebar_opened {
    left: -100%;
  }

  .sidebar__nav-link {
    margin-top: 24px;
    display: block;
    color: var(--text-color);
    font-size: 32px;
    font-weight: 300;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
  }

  .sidebar__nav-link:first-child {
    margin-top: 0;
  }

  .sidebar__login__btn {
    display: block;
    margin: 0 auto;
    margin-top: 10px;
  }
`;

const Sidebar = ({ sidebarOpened }) => {
  return (
    <>
      <StyledSidebar style={sidebarOpened ? { left: "0%" } : { left: "-100%" }}>
        <nav className="sidebar__nav">
          <a href="#" className="sidebar__nav-link">
            Download
          </a>
          <a href="#" className="sidebar__nav-link">
            Products
          </a>
          <a href="#" className="sidebar__nav-link">
            Help Desk
          </a>
          <a href="#" className="sidebar__nav-link">
            Videos
          </a>
          <a href="#" className="sidebar__nav-link">
            Blog
          </a>
          <a href="#" className="sidebar__nav-link">
            Client Area
          </a>
        </nav>

        <div className="sidebar__login">
          <CustomButton
            fontSize="32px"
            padding="12px 56px"
            color="black"
            fontWeight="400"
            className="sidebar__login__btn sidebar__login__login-btn"
          >
            Log in
          </CustomButton>

          <CustomButton
            fontSize="32px"
            padding="12px 56px"
            primary="true"
            background="var(--main-color)"
            className="sidebar__login__btn sidebar__login__signup-btn"
          >
            Sign up
          </CustomButton>
        </div>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
