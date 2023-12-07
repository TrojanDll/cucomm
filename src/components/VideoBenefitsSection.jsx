import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import CustomContainer from './CustomContainer';
import listPoint from './../assets/img/listPoint.svg';
import longArrow from './../assets/img/longArrow.svg';
import videoThumbnail from './../assets/img/video-thumbnail.png';
import firstImg from './../assets/img/promo-img-1.png';

const styles = {
  benefits: {
    paddingTop: '112px',
    background: 'var(--lightest-grey-color)',
  },
  benefits__wrapper: {
    display: 'flex',
  },
  benefits__textWrapper: {
    width: '516px',
  },
  benefits__sign: {
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
  benefits__title: {
    marginTop: '24px',
    fontSize: '48px',
    fontWeight: 500,
    lineHeight: '56px',
  },
  benefits__list: {
    marginTop: '40px',
  },
  benefits__listItem: {
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
  benefits__btnWrapper: {
    display: 'flex',
    columnGap: '32px',
    marginTop: '40px',
    alignItems: 'center',
  },
  benefits__btn: {
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
  benefits__videoClue: {
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

  benefits__imgWrapper: {
    position: 'relative',
    width: 'calc(100% - 516px)',
    height: '100%',
  },
  benefits__img: {
    position: 'absolute',
    width: '625px',
    height: '378px',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.20))',
    borderRadius: '24px',
    top: 0,
    right: 0,
  },
  benefits__videoImg: {
    position: 'absolute',
    width: '625px',
    height: '350px',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.20))',
    borderRadius: '24px',
    top: '250px',
    right: '109px',
    zIndex: 3,
  },
};

class VideoBenefitsSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.benefits}>
        <CustomContainer>
          <div className={classes.benefits__wrapper}>
            <div className={classes.benefits__textWrapper}>
              <div className={classes.benefits__sign}>BENEFITS</div>

              <h2 className={classes.benefits__title}>Benefits lorem ipsum dolor set amet</h2>

              <ul className={classes.benefits__list}>
                <li className={classes.benefits__listItem}>
                  Automated everything: parsing, friend requesting, messaging, linking, statistics
                  calculating
                </li>
                <li className={classes.benefits__listItem}>Export/import leads</li>
                <li className={classes.benefits__listItem}>
                  Up-to-date (core udpates automatically)
                </li>
                <li className={classes.benefits__listItem}>
                  No duplicates. Optional. Does not send messages to the same prospects multiple
                  times, even outreaching from multiple accounts (use the same profiles collection)
                </li>
                <li className={classes.benefits__listItem}>
                  Team. All colleagues share the same profile collections. Reach prospects without
                  duplicates
                </li>
              </ul>

              <div className={classes.benefits__btnWrapper}>
                <button className={classes.benefits__btn}>Shut up and take my money!</button>
                <div className={classes.benefits__videoClue}>Look how it works</div>
              </div>
            </div>

            <div className={classes.benefits__imgWrapper}>
              <img src={firstImg} alt="benefits-img" className={classes.benefits__img} />

              <img
                src={videoThumbnail}
                alt="video-thumbnail"
                className={classes.benefits__videoImg}
              />
            </div>
          </div>
        </CustomContainer>
      </section>
    );
  }
}

export default withStyles(styles)(VideoBenefitsSection);
