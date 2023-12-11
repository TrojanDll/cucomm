import React from 'react';
import { withStyles } from '@material-ui/styles';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sidebarOpened } = this.props;
    const { classes } = this.props;

    return (
      <>
        <header
          style={sidebarOpened ? { left: '0%' } : { left: '-100%' }}
          className={classes.sidebar}>
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
            <button
              fontSize="32px"
              padding="12px 56px"
              color="black"
              fontWeight="400"
              className={`${classes.btn} ${classes.loginBtn}`}>
              Log in
            </button>

            <button
              fontSize="32px"
              padding="12px 56px"
              primary="true"
              background="var(--main-color)"
              className={`${classes.btn} ${classes.signupBtn}`}>
              Sign up
            </button>
          </div>
        </header>
      </>
    );
  }
}

const styles = {
  sidebar: {
    position: 'fixed',
    zIndex: 100,
    paddingBottom: '48px',
    overflowY: 'scroll',
    top: '104px',
    height: 'calc(100% - 104px)',
    width: '100%',
    background: '#ffffff',
    transition: 'left 0.2s',
  },
  sidebar_opened: {
    left: '-100%',
  },
  navLink: {
    marginTop: '24px',
    display: 'block',
    color: 'var(--text-color)',
    fontSize: '32px',
    fontWeight: '300',
    lineHeight: '40px',
    textAlign: 'center',
    cursor: 'pointer',
    '&:first-child': {
      marginTop: '0',
    },
  },
  btn: {
    display: 'block',
    margin: '0 auto',
    marginTop: '10px',
    width: '215px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    textAlign: 'center',
    borderRadius: '9999px',
    fontSize: '32px',
    lineHeight: '40px',
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
};

export default withStyles(styles)(Sidebar);
