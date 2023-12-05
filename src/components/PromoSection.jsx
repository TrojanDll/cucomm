import React from 'react';
import promoImg1 from './../assets/img/promo-img-1.png';
import promoImg2 from './../assets/img/promo-img-2.png';
import CustomContainer from './CustomContainer';
import { withStyles } from '@material-ui/styles';

const styles = {
  promo: {
    paddingBottom: '128px',
    position: 'relative',
    display: 'flex',
  },
  promo__titleWrapper: {
    marginTop: '32px',
    width: '516px',
  },
  promo__title: {
    fontSize: '64px',
    fontWeight: '500',
    lineHeight: '72px',
  },
  promo__descr: {
    marginTop: '32px',
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: '300',
    '& span': {
      fontWeight: '500',
    },
  },
  promo__buttons: {
    marginTop: '40px',
    display: 'flex',
    columnGap: '16px',
  },
  promo__button: {
    height: '72px',
    width: '216px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '9999px',
    fontWeight: '500',
    fontSize: '24px',
    lineHeight: '32px',
    '& focus': {
      outline: 'none',
    },
  },
  promo__button1: {
    border: 'none',
    background: 'var(--main-color)',
    color: '#ffffff',
    '& :hover': {
      background: 'var(--hover-color)',
    },
  },
  promo__button2: {
    background: 'transparent',
    border: '1px solid var(--main-color)',
    color: 'var(--main-color)',

    '& :hover': {
      border: '1px solid var(--hover-color)',
    },
  },
  promo__imgs: {
    position: 'relative',
    top: '0',
    right: '0',
    width: '854px',
  },
  promo__img_1: {
    borderRadius: '24px',
    position: 'absolute',
    top: '0',
    right: '0',
    width: '625px',
    height: '378px',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.2))',
  },
  promo__img_2: {
    position: 'absolute',
    right: '109px',
    top: '298px',
    borderRadius: '24px',
    width: '625px',
    height: '280px',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.2))',
  },
  '@media (max-width: 1350px)': {
    promo: {
      flexWrap: 'wrap',
      paddingBottom: '64px',
    },
    promo__titleWrapper: {
      order: '2',
      margin: '0 auto',
    },
    promo__title: {
      textAlign: 'center',
    },
    promo__descr: {
      textAlign: 'center',
    },
    promo__buttons: {
      justifyContent: 'center',
    },
    promo__imgs: {
      height: '640px',
      margin: '0 auto',
      order: '1',
    },
  },
  '@media (max-width: 992px)': {
    promo__imgs: {
      height: '395px',
    },
    promo__img_1: {
      width: '375px',
      height: '226px',
      right: '141px',
      filter: 'drop-shadow(0px 8.605px 25.815px rgba(0, 48, 71, 0.2))',
    },
    promo__img_2: {
      top: '202px',
      right: '207px',
      width: '375px',
      height: '168px',
      filter: 'drop-shadow(0px 8.605px 25.815px rgba(0, 48, 71, 0.2))',
      transition: 'all 0.3s',
    },
    promo__title: {
      fontSize: '48px',
      lineHeight: '56px',
    },
    promo__descr: {
      marginTop: '24px',
      fontSize: '22px',
      lineHeight: '30px',
    },
  },
  '@media (max-width: 768px)': {
    promo__img_1: {
      width: '375px',
      height: '226px',
      right: '44px',
    },
    promo__img_2: {
      top: '202px',
      right: '110px',
      width: '375px',
      height: '168px',
    },
    promo__title: {
      fontSize: '44px',
      lineHeight: '52px',
    },
  },
  '@media (max-width: 576px)': {
    promo__titleWrapper: {
      width: '100%',
    },
    promo__imgs: {
      height: '266px',
    },
    promo__img_1: {
      borderRadius: '8px',
      width: '268px',
      height: '162px',
      right: 'auto',
      left: 'calc(50% + 24px)',
      transform: 'translateX(-50%)',
    },
    promo__img_2: {
      borderRadius: '8px',
      width: '268px',
      height: '120px',
      top: '145px',
      right: 'auto',
      left: 'calc(50% - 24px)',
      transform: 'translateX(-50%)',
    },
    promo__title: {
      marginTop: '40px',
      fontSize: '40px',
      lineHeight: '48px',
    },
    promo__descr: {
      marginTop: '16px',
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: '400',
      '& span': {
        fontWeight: '600',
      },
    },
    promo__buttons: {
      marginTop: '24px',
      display: 'block',
    },
    promo__button: {
      margin: '0 auto',
      fontSize: '18px',
      '&:last-child': {
        marginTop: '16px',
      },
    },
  },
};

class PromoSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isPromoFilter } = this.props;
    const { classes } = this.props;

    return (
      <CustomContainer>
        <section className={classes.promo}>
          <div className={classes.promo__titleWrapper}>
            <h1 className={classes.promo__title}>
              Uncover tons of leads on scale
            </h1>
            <div className={classes.promo__descr}>
              Leverage a <span>huge 3.8 billion leads database</span> by sending
              hundreds of messages on Facebook every day completely on autopilot
            </div>

            <div className={classes.promo__buttons}>
              <button
                className={`${classes.promo__button} ${classes.promo__button1}`}
              >
                Try now
              </button>

              <button
                className={`${classes.promo__button} ${classes.promo__button2}`}
              >
                Book a demo
              </button>
            </div>
          </div>

          <div className={classes.promo__imgs}>
            <img
              style={isPromoFilter ? {} : { filter: 'none' }}
              className={`${classes.promo__img} ${classes.promo__img_1}`}
              src={promoImg1}
              alt="promo-image"
            />
            <img
              className={`${classes.promo__img} ${classes.promo__img_2}`}
              src={promoImg2}
              alt="promo-image"
            />
          </div>
        </section>
      </CustomContainer>
    );
  }
}

export default withStyles(styles)(PromoSection);
