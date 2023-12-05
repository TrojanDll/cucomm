import React from 'react';
import { withStyles } from '@material-ui/styles';

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
  sidebar__navLink: {
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
  sidebar__login__btn: {
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
  sidebar__login__loginBtn: {
    fontWeight: 400,
    background: 'transparent',
  },
  sidebar__login__signupBtn: {
    background: 'var(--main-color)',
    color: '#ffffff',
    fontWeight: 500,
    '&:hover': {
      background: 'var(--hover-color)',
    },
  },
};

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
          className={classes.sidebar}
        >
          <nav className={classes.sidebar__nav}>
            <a href="#" className={classes.sidebar__navLink}>
              Download
            </a>
            <a href="#" className={classes.sidebar__navLink}>
              Products
            </a>
            <a href="#" className={classes.sidebar__navLink}>
              Help Desk
            </a>
            <a href="#" className={classes.sidebar__navLink}>
              Videos
            </a>
            <a href="#" className={classes.sidebar__navLink}>
              Blog
            </a>
            <a href="#" className={classes.sidebar__navLink}>
              Client Area
            </a>
          </nav>

          <div className={classes.sidebar__login}>
            <button
              fontSize="32px"
              padding="12px 56px"
              color="black"
              fontWeight="400"
              className={`${classes.sidebar__login__btn} ${classes.sidebar__login__loginBtn}`}
            >
              Log in
            </button>

            <button
              fontSize="32px"
              padding="12px 56px"
              primary="true"
              background="var(--main-color)"
              className={`${classes.sidebar__login__btn} ${classes.sidebar__login__signupBtn}`}
            >
              Sign up
            </button>
          </div>
        </header>
      </>
    );
  }
}

export default withStyles(styles)(Sidebar);
