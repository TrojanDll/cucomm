import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import CustomContainer from './CustomContainer';
import listPoint from './../assets/img/listPoint.svg';
import longArrow from './../assets/img/longArrow.svg';
import videoThumbnail from './../assets/img/video-thumbnail.png';
import firstImg from './../assets/img/promo-img-1.png';

class VideoBenefitsSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.benefits}>
        <CustomContainer>
          <div className={classes.wrapper}>
            <div className={classes.textWrapper}>
              <div className={classes.sign}>BENEFITS</div>

              <h2 className={classes.title}>Benefits lorem ipsum dolor set amet</h2>

              <ul className={classes.list}>
                <li className={classes.listItem}>
                  Automated everything: parsing, friend requesting, messaging, linking, statistics
                  calculating
                </li>
                <li className={classes.listItem}>Export/import leads</li>
                <li className={classes.listItem}>Up-to-date (core udpates automatically)</li>
                <li className={classes.listItem}>
                  No duplicates. Optional. Does not send messages to the same prospects multiple
                  times, even outreaching from multiple accounts (use the same profiles collection)
                </li>
                <li className={classes.listItem}>
                  Team. All colleagues share the same profile collections. Reach prospects without
                  duplicates
                </li>
              </ul>

              <div className={classes.btnWrapper}>
                <button className={classes.btn}>Shut up and take my money!</button>
                <div className={classes.videoClue}>Look how it works</div>
              </div>
            </div>

            <div className={classes.imgWrapper}>
              <img src={firstImg} alt="benefits-img" className={classes.img} />

              <img src={videoThumbnail} alt="video-thumbnail" className={classes.videoImg} />
            </div>
          </div>
        </CustomContainer>
      </section>
    );
  }
}

const styles = {
  benefits: {
    paddingTop: '112px',
    background: 'var(--lightest-grey-color)',
  },
  wrapper: {
    display: 'flex',
  },
  textWrapper: {
    width: '516px',
  },
  sign: {
    width: '89px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '9999px',
    textTransform: 'uppercase',
    fontFamily: 'BarlowCondensed',
    letterSpacing: '1.4px',
    height: '40px',
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--main-color)',
    background: '#ffffff',
    padding: '0 16px',
  },
  title: {
    marginTop: '24px',
    fontSize: '48px',
    fontWeight: 500,
    lineHeight: '56px',
  },
  list: {
    marginTop: '40px',
  },
  listItem: {
    marginTop: '16px',
    display: 'flex',
    columnGap: '24px',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',

    '&:first-child': {
      marginTop: 0,
    },
    '&::before': {
      content: '""',
      display: 'block',
      marginTop: '8px',
      width: '8px',
      height: '9px',
      background: `url("${listPoint}") center center/cover no-repeat`,
      flexShrink: 0,
    },
  },
  btnWrapper: {
    display: 'flex',
    columnGap: '32px',
    marginTop: '40px',
    alignItems: 'center',
  },
  btn: {
    height: '64px',
    padding: '20px 32px',
    fontSize: '18px',
    fontWeight: '600',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '24px',
    background: 'var(--main-color)',
    borderRadius: '9999px',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      background: 'var(--hover-color)',
    },
  },
  videoClue: {
    position: 'relative',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '24px',
    zIndex: 5,
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '85px',
      height: '35px',
      right: '-32px',
      top: '-18px',
      transform: 'translateX(100%)',
      background: `url("${longArrow}") center center/cover no-repeat`,
      zIndex: 5,
    },
  },

  imgWrapper: {
    position: 'relative',
    width: 'calc(100% - 516px)',
    height: '100%',
  },
  img: {
    position: 'absolute',
    width: '625px',
    height: '378px',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.20))',
    borderRadius: '24px',
    top: 0,
    right: 0,
  },
  videoImg: {
    position: 'absolute',
    width: '625px',
    height: '350px',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.20))',
    borderRadius: '24px',
    top: '250px',
    right: '109px',
    zIndex: 3,
  },

  '@media (max-width: 1320px)': {
    wrapper: {
      flexWrap: 'wrap',
    },
    textWrapper: {
      width: '100%',
    },
    sign: {
      margin: '0 auto',
    },
    title: {
      textAlign: 'center',
    },
    img: {
      display: 'none',
    },
    videoImg: {
      position: 'static',
      display: 'block',
      height: 'auto',
    },
    videoClue: {
      '&::after': {
        display: 'none',
      },
    },
    btnWrapper: {
      justifyContent: 'center',
    },
    imgWrapper: {
      margin: '0 auto',
      marginTop: '48px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  },

  '@media (max-width: 768px)': {
    title: {
      fontSize: '44px',
      lineHeight: '56px',
    },
  },

  '@media (max-width: 576px)': {
    benefits: {
      paddingTop: '64px',
    },
    title: {
      fontSize: '32px',
      lineHeight: '40px',
    },
    listItem: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    btnWrapper: {
      flexWrap: 'wrap',
    },
    btn: {
      width: '100%',
    },
    videoClue: {
      marginTop: '32px',
      textAlign: 'center',
    },
    imgWrapper: {
      marginTop: '32px',
    },
    videoImg: {
      width: '100%',
    },
  },
};

export default withStyles(styles)(VideoBenefitsSection);
