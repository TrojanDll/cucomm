import React from 'react';
import styled from 'styled-components';
import CustomButton from '../ui/CustomButton';
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
  },
};

// const StyledSidebar = styled.header`
//   .sidebar {
//     position: fixed;
//     z-index: 100;
//     padding-bottom: 48px;
//     overflow-y: scroll;
//     top: 104px;
//     height: calc(100% - 104px);
//     width: 100%;
//     background: #ffffff;
//     transition: left 0.2s;
//   }

//   .sidebar_opened {
//     left: -100%;
//   }

//   .sidebar__navLink {
//     margin-top: 24px;
//     display: block;
//     color: var(--text-color);
//     font-size: 32px;
//     font-weight: 300;
//     line-height: 40px;
//     text-align: center;
//     cursor: pointer;
//   }

//   .sidebar__navLink:first-child {
//     margin-top: 0;
//   }

//   .sidebar__login__btn {
//     display: block;
//     margin: 0 auto;
//     margin-top: 10px;
//   }
// `;

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
            <CustomButton
              fontSize="32px"
              padding="12px 56px"
              color="black"
              fontWeight="400"
              className={`${classes.sidebar__login__btn} ${classes.sidebar__login__loginBtn}`}
            >
              Log in
            </CustomButton>

            <CustomButton
              fontSize="32px"
              padding="12px 56px"
              primary="true"
              background="var(--main-color)"
              className={`${classes.sidebar__login__btn} ${classes.sidebar__login__signupBtn}`}
            >
              Sign up
            </CustomButton>
          </div>
        </header>
      </>
    );
  }
}

export default withStyles(styles)(Sidebar);
