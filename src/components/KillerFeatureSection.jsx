import React from 'react';
import { withStyles } from '@material-ui/styles';
import CustomContainer from './CustomContainer';
import featureImg1 from './../assets/img/feature-img-1.jpg';
import featureImg2 from './../assets/img/feature-img-2.jpg';

class KillerFeatureSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.feature}>
        <CustomContainer>
          <div className={classes.feature__sign}>KILLER FEATURE</div>

          <h2 className={classes.feature__title}>Common inbox</h2>
          <div className={classes.feature__descr}>One inbox for all your Facebook accounts</div>

          <img
            src={featureImg1}
            alt="man-with-glasses"
            className={`${classes.feature__img} ${classes.feature__img_1}`}
          />
          <img
            src={featureImg2}
            alt="woman-with-glasses"
            className={`${classes.feature__img} ${classes.feature__img_2}`}
          />
        </CustomContainer>
      </section>
    );
  }
}

const styles = {
  feature: {
    paddingBottom: '152px',
    paddingTop: '112px',
    backgroundColor: 'var(--text-color)',
  },
  feature__sign: {
    margin: '0 auto',
    width: '131px',
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
  feature__title: {
    marginTop: '24px',
    color: '#ffffff',
    fontWeight: 500,
    fontSize: '48px',
    lineHeight: '56px',
    textAlign: 'center',
  },
  feature__descr: {
    marginTop: '16px',
    color: '#ffffff',
    fontWeight: 300,
    fontSize: '24px',
    lineHeight: '32px',
    textAlign: 'center',
  },
  feature__img: {
    position: 'absolute',
    width: '188px',
    height: '188px',
    borderRadius: '24px',
  },
  feature__img_1: {
    left: 0,
    top: '-160px',
  },
  feature__img_2: {
    right: 0,
    bottom: '-104px',
  },

  '@media (max-width: 992px)': {
    feature__img_1: {
      display: 'none',
    },
    feature__img_2: {
      display: 'none',
    },
  },

  '@media (max-width: 768px)': {
    feature__title: {
      fontSize: '44px',
    },
    feature__descr: {
      fontSize: '22px',
    },
  },

  '@media (max-width: 576px)': {
    feature__title: {
      fontSize: '32px',
      lineHeight: '40px',
    },
    feature__descr: {
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
};

export default withStyles(styles)(KillerFeatureSection);
