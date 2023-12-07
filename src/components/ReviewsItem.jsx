import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';

const styles = {};

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
