import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import CustomContainer from './CustomContainer';
import SpriteIcon from '../ui/SpriteIcon';
import ReviewsItem from './ReviewsItem';
import profileImg1 from './../assets/img/reviewer1.png';
import profileImg2 from './../assets/img/reviewer2.png';
import profileImg3 from './../assets/img/reviewer3.png';

class ReviewsSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    const reviewsData = [
      {
        id: 1,
        sign: 'ENGINEERING COMPANY',
        text: `“We have increased our sales by 2 times. It's very powerful software. Never such a thing before for groups on FB.”`,
        profileImg: `${profileImg1}`,
        profileName: 'Jason Carmona',
        profileDescr: 'CEO, Company Name',
      },
      {
        id: 2,
        sign: 'INSURANCE',
        text: `“Now our Sales Reps spend 4x less time on Facebook outreach with the same result. They have more time for other important tasks.”`,
        profileImg: `${profileImg2}`,
        profileName: 'Nikita Kalashnikov',
        profileDescr: 'Sales Manager, Company Name',
      },
      {
        id: 3,
        sign: 'REAL ESTATE',
        text: `“Our SDRs use CUCOMM every day. Without it, Facebook wouldn't be a profitable channel for us.”`,
        profileImg: `${profileImg3}`,
        profileName: 'Felix Tang',
        profileDescr: 'CEO, Company Name',
      },
    ];

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

          <div className={classes.reviewsRateMobile}>
            <SpriteIcon
              className={classes.reviews__rate__trustpilotImg}
              id="icon-trustpilot-logo"
            />
            <SpriteIcon className={classes.reviews__rate__starsImg} id="icon-trustpilot-raiting" />
            <div>
              TrustScore <span>4.1 | XX</span> reviews
            </div>
          </div>

          <div className={classes.reviews__items}>
            {reviewsData.map((item) => (
              <ReviewsItem
                sign={item.sign}
                text={item.text}
                profileImg={item.profileImg}
                profileName={item.profileName}
                profileDescr={item.profileDescr}
                key={item.id}
              />
            ))}
          </div>
        </CustomContainer>
      </section>
    );
  }
}

const styles = {
  reviewsRateMobile: {
    display: 'none',
  },
  reviews: {
    padding: '112px 0',
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
  reviews__items: {
    marginTop: '48px',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
  },

  '@media (max-width: 1320px)': {
    reviews__items: {
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin: '0 auto',
      marginTop: '48px',
      rowGap: '36px',
    },
  },

  '@media (max-width: 992px)': {
    reviews__rate: {
      display: 'none',
    },
    reviewsRateMobile: {
      marginTop: '28px',
      display: 'flex',
      flexWrap: 'wrap',
      rowGap: '16px',
      columnGap: '16px',
      justifyContent: 'center',
      '& div': {
        width: '100%',
        textAlign: 'center',
        fontSize: '22px',
        fontWeight: 400,
        '& span': {
          fontWeight: 600,
        },
      },
    },
    reviews__rate__trustpilotImg: {
      width: '153px',
      height: '38px',
    },
    reviews__rate__starsImg: {
      width: '205px',
      height: '38px',
    },
  },

  '@media (max-width: 768px)': {
    reviews__title: {
      fontSize: '44px',
    },
  },

  '@media (max-width: 576px)': {
    reviews: {
      padding: '64px 0',
    },
    reviews__title: {
      fontSize: '32px',
      lineHeight: '40px',
    },
    reviews__rate__trustpilotImg: {
      width: '118px',
      height: '29px',
    },
    reviews__rate__starsImg: {
      width: '158px',
      height: '29px',
    },
    reviewsRateMobile: {
      marginTop: '24px',
      '& div': {
        fontSize: '18px',
        lineHeight: '24px',
      },
    },
    reviews__items: {
      width: '100%',
    },
  },
};

export default withStyles(styles)(ReviewsSection);
