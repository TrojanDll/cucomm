import React, { useState } from 'react';
import SpriteIcon from '../ui/SpriteIcon';
import Sidebar from './Sidebar';
import { withStyles } from '@material-ui/styles';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpened: false,
    };
  }

  switchSidebar = () => {
    const { sidebarOpened } = this.state;
    this.setState({ sidebarOpened: !sidebarOpened });
    this.props.toggleIsPromoFilter();
  };

  render() {
    const { sidebarOpened } = this.state;
    const { classes } = this.props;

    return (
      <header
        style={sidebarOpened ? { background: '#ffffff', paddingTop: '116px' } : {}}
        className={classes.header}>
        <div
          className={classes.header__wrapper}
          style={
            sidebarOpened
              ? {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100%',
                  background: '#ffffff',
                }
              : {}
          }>
          <div className={classes.header__logo}>
            <SpriteIcon id="icon-logo" className={classes.header__logo_img} />
          </div>

          <nav className={classes.header__nav}>
            <a href="#" className={classes.header__nav_link}>
              Download
            </a>
            <a href="#" className={classes.header__nav_link}>
              Products
            </a>
            <a href="#" className={classes.header__nav_link}>
              Help Desk
            </a>
            <a href="#" className={classes.header__nav_link}>
              Videos
            </a>
            <a href="#" className={classes.header__nav_link}>
              Blog
            </a>
            <a href="#" className={classes.header__nav_link}>
              Client Area
            </a>
          </nav>

          <div className={classes.header__login}>
            <button className={`${classes.header__login__btn} ${classes.header__login__loginBtn}`}>
              Log in
            </button>

            <button className={`${classes.header__login__btn} ${classes.header__login__signupBtn}`}>
              Sign up
            </button>
          </div>

          <div
            className={
              sidebarOpened
                ? `${classes.navToggle} ${classes.navToggle_opened}`
                : `${classes.navToggle}`
            }
            onClick={this.switchSidebar}>
            <span className="barTop"></span>
            <span className="barMid"></span>
            <span className="barBot"></span>
          </div>
        </div>

        <Sidebar sidebarOpened={sidebarOpened} />
      </header>
    );
  }
}

const styles = {
  header: {
    backgroundColor: '#ffffff',
  },

  header__wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '32px 40px',
    backgroundColor: '#ffffff',
  },
  header__logo: {
    width: '186px',
    height: '52px',
  },
  header__logo_img: {
    width: '186px',
    height: '52px',
  },
  header__nav: {
    display: 'flex',
    columnGap: '32px',
  },
  header__nav_link: {
    display: 'block',
    color: 'var(--text-color)',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  navToggle: {
    display: 'none',
    cursor: 'pointer',
    span: {
      pointerEvents: 'none',
    },
    '& [class*="bar"]': {
      display: 'block',
      width: '32px',
      height: '1px',
      marginBottom: '8px',
      background: '#222',
      borderRadius: '9999px',
      transform: 'rotate(0deg)',
      transition: '0.2s ease all',
      cursor: 'pointer',
    },
  },
  navToggle_opened: {
    marginLeft: '5px',
    '& .barBot': {
      marginBottom: '0',
    },
    '& .barTop': {
      transform: 'rotate(45deg)',
      transformOrigin: '6% 15%',
    },
    '& .barMid': {
      opacity: '0',
    },
    '& .barBot': {
      transform: 'rotate(-45deg)',
      transformOrigin: '14% 95%',
      marginBottom: '10px',
    },
  },
  header__loginBtn: {
    padding: '12px 32px',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
    border: 'none',
    borderRadius: '9999px',
  },
  header__login__signupBtn: {
    padding: '12px 32px',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '24px',
    textAlign: 'center',
    border: 'none',
    borderRadius: '9999px',
  },
  header__login__btn: {
    padding: '12px 32px',
    border: 'none',
    textAlign: 'center',
    borderRadius: '9999px',
    fontSize: '18px',
    lineHeight: '24px',
  },
  header__login__loginBtn: {
    fontWeight: 400,
    background: 'transparent',
  },
  header__login__signupBtn: {
    background: 'var(--main-color)',
    color: '#ffffff',
    fontWeight: 500,
    '&:hover': {
      background: 'var(--hover-color)',
    },
  },

  '@media (max-width: 1200px)': {
    header__logo: {
      width: '130px',
      height: '36px',
    },
    header__logo_img: {
      width: '130px',
      height: '36px',
    },
    header__nav: {
      columnGap: '28px',
    },
    header__nav_link: {
      fontSize: '16px',
    },
    header__login__btn: {
      padding: '10px 24px',
    },
  },
  '@media (max-width: 992px)': {
    navToggle: {
      display: 'block',
    },
    header__logo: {
      width: '186px',
      height: '52px',
    },
    header__logo_img: {
      width: '186px',
      height: '52px',
    },
    header__nav: {
      display: 'none',
      columnGap: '28px',
    },
    header__nav_link: {
      fontSize: '16px',
    },
    header__login: {
      display: 'none',
    },
  },
};

export default withStyles(styles)(Header);
