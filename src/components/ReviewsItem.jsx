import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';

class ReviewsItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes, sign, text, profileImg, profileName, profileDescr } = this.props;

    return (
      <div className={classes.reviewsItem}>
        <div className={classes.sign}>{sign}</div>
        <div className={classes.text}>{text}</div>
        <div className={classes.profile}>
          <img className={classes.profileImg} src={profileImg} alt="profile" />
          <div className={classes.profileText}>
            <div className={classes.name}>{profileName}</div>
            <div className={classes.descr}>{profileDescr}</div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  reviewsItem: {
    width: '407px',
    padding: '40px',
    flexShrink: 0,
    borderRadius: '24px',
    background: '#ffffff',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.20))',
  },
  sign: {
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
  text: {
    marginTop: '16px',
    fontSize: '24px',
    fontWeight: 300,
  },
  profile: {
    marginTop: '24px',
    display: 'flex',
    columnGap: '16px',
    alignItems: 'center',
  },
  profileImg: {
    flexShrink: 0,
    width: '80px',
    height: '80px',
  },
  name: {
    fontSize: '18px',
    fontWeight: 600,
  },
  descr: {
    fontSize: '18px',
    fontWeight: 400,
  },

  '@media (max-width: 576px)': {
    reviewsItem: {
      width: '100%',
      padding: '30px',
    },
    text: {
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
};

export default withStyles(styles)(ReviewsItem);
