import React from 'react';
import { withStyles } from '@material-ui/styles';
import CustomContainer from './CustomContainer';
import featureImgMan from './../assets/img/feature-img-1.jpg';
import featureImgWoman from './../assets/img/feature-img-2.jpg';

class KillerFeatureSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.feature}>
        <CustomContainer>
          <div className={classes.sign}>KILLER FEATURE</div>

          <h2 className={classes.title}>Common inbox</h2>
          <div className={classes.descr}>One inbox for all your Facebook accounts</div>

          <img
            src={featureImgMan}
            alt="man-with-glasses"
            className={`${classes.img} ${classes.imgMan}`}
          />
          <img
            src={featureImgWoman}
            alt="woman-with-glasses"
            className={`${classes.img} ${classes.imgWoman}`}
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
  sign: {
    margin: '0 auto',
    width: 'fit-content',
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
    padding: '8px 16px',
  },
  title: {
    marginTop: '24px',
    color: '#ffffff',
    fontWeight: 500,
    fontSize: '48px',
    lineHeight: '56px',
    textAlign: 'center',
  },
  descr: {
    marginTop: '16px',
    color: '#ffffff',
    fontWeight: 300,
    fontSize: '24px',
    lineHeight: '32px',
    textAlign: 'center',
  },
  img: {
    position: 'absolute',
    width: '188px',
    height: '188px',
    borderRadius: '24px',
  },
  imgMan: {
    left: 0,
    top: '-160px',
  },
  imgWoman: {
    right: 0,
    bottom: '-104px',
  },

  '@media (max-width: 992px)': {
    imgMan: {
      display: 'none',
    },
    imgWoman: {
      display: 'none',
    },
  },

  '@media (max-width: 768px)': {
    title: {
      fontSize: '44px',
    },
    descr: {
      fontSize: '22px',
    },
  },

  '@media (max-width: 576px)': {
    feature: {
      paddingBottom: '120px',
      paddingTop: '64px',
    },
    title: {
      fontSize: '32px',
      lineHeight: '40px',
    },
    descr: {
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
};

export default withStyles(styles)(KillerFeatureSection);
