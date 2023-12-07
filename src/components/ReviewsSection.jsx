import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import CustomContainer from './CustomContainer';
import SpriteIcon from '../ui/SpriteIcon';

const styles = {
  reviews: {
    paddingTop: '112px',
    background: 'var(--lightest-grey-color)',
  },
  reviews__sign: {
    margin: '0 auto',
    width: '84px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '9999px',
    textTransform: 'uppercase',
    fontFamily: 'BarlowCondensed',
    letterSpacing: '1.4px',
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--main-color)',
    background: '#ffffff',
    padding: '0 16px',
  },
  reviews__title: {
    marginTop: '24px',
    fontSize: '48px',
    fontWeight: 500,
    textAlign: 'center',
  },
  reviews__rate: {
    marginTop: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: '16px',
    fontSize: '18px',
    fontWeight: 400,
    '& span': {
      fontSize: '24px',
      fontWeight: 500,
    },
  },
  reviews__rate__starsImg: {
    width: '127px',
    height: '24px',
    flexShrink: 0,
  },
  reviews__rate__trustpilotImg: {
    width: '97px',
    height: '24px',
    flexShrink: 0,
  },
};

class ReviewsSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.reviews}>
        <CustomContainer>
          <div className={classes.reviews__sign}>REVIEWS</div>
          <h2 className={classes.reviews__title}>Clients reviews lorem ipsum</h2>

          <div className={classes.reviews__rate}>
            Our customers say <span>Great</span>{' '}
            <SpriteIcon className={classes.reviews__rate__starsImg} id="icon-trustpilot-raiting" />
            4.1 out of 5 based on XX reviews
            <SpriteIcon
              className={classes.reviews__rate__trustpilotImg}
              id="icon-trustpilot-logo"
            />
          </div>
        </CustomContainer>
      </section>
    );
  }
}

export default withStyles(styles)(ReviewsSection);
