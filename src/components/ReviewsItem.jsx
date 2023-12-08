import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';

const styles = {
  reviewsItem: {
    width: '407px',
    padding: '40px',
    flexShrink: 0,
    borderRadius: '24px',
    background: '#ffffff',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.20))',
  },
  reviewsItem__sign: {
    height: '40px',
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: '9999px',
    textTransform: 'uppercase',
    fontFamily: 'BarlowCondensed',
    letterSpacing: '1.4px',
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--main-color)',
    background: 'var(--secondary-color)',
    padding: '8px 16px',
  },
  reviewsItem__text: {
    marginTop: '16px',
    fontSize: '24px',
    fontWeight: 300,
  },
  reviewsItem__profile: {
    marginTop: '24px',
    display: 'flex',
    columnGap: '16px',
    alignItems: 'center',
  },
  reviewsItem__profileImg: {
    flexShrink: 0,
    width: '80px',
    height: '80px',
  },
  reviewsItem__profile__text: {
    flexShrink: 0,
  },
  reviewsItem__profile__text__name: {
    fontSize: '18px',
    fontWeight: 600,
  },
  reviewsItem__profile__text__descr: {
    fontSize: '18px',
    fontWeight: 400,
  },
};

class ReviewsItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes, sign, text, profileImg, profileName, profileDescr } = this.props;

    return (
      <div className={classes.reviewsItem}>
        <div className={classes.reviewsItem__sign}>{sign}</div>
        <div className={classes.reviewsItem__text}>{text}</div>
        <div className={classes.reviewsItem__profile}>
          <img className={classes.reviewsItem__profileImg} src={profileImg} alt="profile" />
          <div className={classes.reviewsItem__profile__text}>
            <div className={classes.reviewsItem__profile__text__name}>{profileName}</div>
            <div className={classes.reviewsItem__profile__text__descr}>{profileDescr}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ReviewsItem);
