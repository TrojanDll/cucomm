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
          className={classes.wrapper}
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
          <div className={classes.logo}>
            <SpriteIcon id="icon-logo" className={classes.logoImg} />
          </div>

          <nav className={classes.nav}>
            <a href="#" className={classes.navLink}>
              Download
            </a>
            <a href="#" className={classes.navLink}>
              Products
            </a>
            <a href="#" className={classes.navLink}>
              Help Desk
            </a>
            <a href="#" className={classes.navLink}>
              Videos
            </a>
            <a href="#" className={classes.navLink}>
              Blog
            </a>
            <a href="#" className={classes.navLink}>
              Client Area
            </a>
          </nav>

          <div className={classes.login}>
            <button className={`${classes.btn} ${classes.loginBtn}`}>Log in</button>

            <button className={`${classes.btn} ${classes.signupBtn}`}>Sign up</button>
          </div>

          <div
            className={
              sidebarOpened
                ? `${classes.navToggle} ${classes.navToggleOpened}`
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

  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '28px 40px',
    backgroundColor: '#ffffff',
    zIndex: 9999,
  },
  logo: {
    width: '186px',
    height: '52px',
  },
  logoImg: {
    width: '186px',
    height: '52px',
  },
  nav: {
    display: 'flex',
    columnGap: '32px',
  },
  navLink: {
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
  navToggleOpened: {
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
  loginBtn: {
    padding: '12px 32px',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
    border: 'none',
    borderRadius: '9999px',
  },
  signupBtn: {
    padding: '12px 32px',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '24px',
    textAlign: 'center',
    border: 'none',
    borderRadius: '9999px',
  },
  btn: {
    padding: '12px 32px',
    border: 'none',
    textAlign: 'center',
    borderRadius: '9999px',
    fontSize: '18px',
    lineHeight: '24px',
  },
  loginBtn: {
    fontWeight: 400,
    background: 'transparent',
  },
  signupBtn: {
    background: 'var(--main-color)',
    color: '#ffffff',
    fontWeight: 500,
    '&:hover': {
      background: 'var(--hover-color)',
    },
  },

  '@media (max-width: 1200px)': {
    logo: {
      width: '130px',
      height: '36px',
    },
    logoImg: {
      width: '130px',
      height: '36px',
    },
    nav: {
      columnGap: '28px',
    },
    navLink: {
      fontSize: '16px',
    },
    loginBtn: {
      padding: '10px 24px',
    },
  },
  '@media (max-width: 992px)': {
    navToggle: {
      display: 'block',
    },
    logo: {
      width: '186px',
      height: '52px',
    },
    logoImg: {
      width: '186px',
      height: '52px',
    },
    nav: {
      display: 'none',
      columnGap: '28px',
    },
    navLink: {
      fontSize: '16px',
    },
    login: {
      display: 'none',
    },
  },
};

export default withStyles(styles)(Header);
