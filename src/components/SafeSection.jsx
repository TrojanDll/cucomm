import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import SpriteIcon from '../ui/SpriteIcon';
import CustomContainer from './CustomContainer';

class SafeSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.safeSection}>
        <CustomContainer>
          <SpriteIcon id="icon-safety" className={classes.safeIcon}></SpriteIcon>

          <div className={classes.safeWrapper}>
            <div className={classes.safeMessageWrapper}>
              <div className={classes.safeMessageImgContainer}>
                <SpriteIcon
                  className={classes.safeMessageImg}
                  id="icon-real-user-behavior"></SpriteIcon>
              </div>

              <div className={classes.safeMessageDescr}>Simulates real user behaviour</div>
            </div>

            <div className={classes.safeMessageWrapper}>
              <div className={classes.safeMessageImgContainer}>
                <SpriteIcon
                  className={classes.safeMessageImg}
                  id="icon-safety-notifications"></SpriteIcon>
              </div>

              <div className={classes.safeMessageDescr}>Built-in safety notifications</div>
            </div>
          </div>

          <button className={classes.button}>Start using the software</button>
        </CustomContainer>
      </section>
    );
  }
}

const styles = {
  safeSection: {
    position: 'relative',
    paddingTop: '168px',
    paddingBottom: '112px',
    background: 'var(--text-color)',
  },
  safeIcon: {
    position: 'absolute',
    top: '-88px',
    left: 0,
    width: '160px',
    height: '154px',
    flexShrink: 0,
    zIndex: 2,
  },
  safeWrapper: {
    display: 'flex',
    columnGap: '248px',
    justifyContent: 'center',
  },
  safeMessageWrapper: {
    position: 'relative',
    '&:first-child': {
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: '-124px',
        width: '1px',
        height: '100%',
        background: '#ffffff',
        opacity: '0.3',
      },
    },
  },
  safeMessageImg: {
    borderRadius: '24px',
    width: '407px',
    height: '194px',
  },
  safeMessageDescr: {
    marginTop: '24px',
    fontSize: '24px',
    fontWeight: 300,
    color: '#ffffff',
    textAlign: 'center',
  },
  button: {
    margin: '0 auto',
    marginTop: '40px',
    width: '406px',
    height: '64px',
    background: 'var(--main-color)',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 600,

    '&:hover': {
      background: 'var(--hover-color)',
    },
  },
};

export default withStyles(styles)(SafeSection);
