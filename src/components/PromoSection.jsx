import React from 'react';
import promoImgPeople from './../assets/img/promo-img-1.png';
import imgProfiles from './../assets/img/promo-img-2.png';
import CustomContainer from './CustomContainer';
import { withStyles } from '@material-ui/styles';

class PromoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: 0,
    };
  }

  render() {
    const { translateY } = this.state;
    const { classes, isPromoFilter } = this.props;

    return (
      <CustomContainer>
        <section className={classes.promo}>
          <div className={classes.titleWrapper}>
            <h1 className={classes.title}>Uncover tons of leads on scale</h1>
            <div className={classes.descr}>
              Leverage a <span>huge 3.8 billion leads database</span> by sending hundreds of
              messages on Facebook every day completely on autopilot
            </div>

            <div className={classes.buttons}>
              <button className={`${classes.button} ${classes.buttonTrynow}`}>Try now</button>

              <button className={`${classes.button} ${classes.buttonBook}`}>Book a demo</button>
            </div>
          </div>

          <div className={classes.imgs}>
            <img
              style={isPromoFilter ? {} : { filter: 'none', zIndex: '-1' }}
              className={`${classes.img} ${classes.imgPeople}`}
              src={promoImgPeople}
              alt="promo-image"
            />

            <div
              // style={{ transform: `translateY: ${100}px` }}
              className={`${classes.img} ${classes.imgProfiles}`}>
              <div className={classes.imgProfilesWrapper}>
                <img
                  style={isPromoFilter ? {} : { filter: 'none', zIndex: '-1' }}
                  className={`${classes.img} ${classes.imgProfilesContent}`}
                  src={imgProfiles}
                  alt="promo-image"
                />
                <div className={classes.imgProfilesTextWrapper}>
                  <div
                    className={`${classes.imgProfilesTextItem} ${classes.imgProfilesTextItemActive}`}>
                    PROFILES
                  </div>
                  <div className={classes.imgProfilesTextItem}>COMMON INBOX</div>
                  <div className={classes.imgProfilesTextItem}>STATISTICS</div>
                  <div className={classes.imgProfilesTextItem}>FUNNEL</div>
                  <div className={classes.imgProfilesTextItem}>MESSAGE SCRIPT</div>
                  <div className={classes.imgProfilesTextItem}>USER</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </CustomContainer>
    );
  }
}

const styles = {
  promo: {
    paddingBottom: '128px',
    position: 'relative',
    display: 'flex',
  },
  titleWrapper: {
    marginTop: '32px',
    width: '516px',
  },
  title: {
    fontSize: '64px',
    fontWeight: '500',
    lineHeight: '72px',
  },
  descr: {
    marginTop: '32px',
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: '300',
    '& span': {
      fontWeight: '500',
    },
  },
  buttons: {
    marginTop: '40px',
    display: 'flex',
    columnGap: '16px',
  },
  button: {
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
  buttonTrynow: {
    border: 'none',
    background: 'var(--main-color)',
    color: '#ffffff',
    '&:hover': {
      background: 'var(--hover-color)',
    },
  },
  buttonBook: {
    background: 'transparent',
    border: '1px solid var(--main-color)',
    color: 'var(--main-color)',

    '&:hover': {
      border: '1px solid var(--hover-color)',
      color: 'var(--hover-color)',
    },
  },
  imgs: {
    position: 'relative',
    top: '0',
    right: '0',
    width: '854px',
  },
  imgPeople: {
    borderRadius: '24px',
    position: 'absolute',
    top: '0',
    right: '0',
    width: '625px',
    height: '378px',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.2))',
  },
  imgProfiles: {
    position: 'absolute',
    right: '109px',
    top: '298px',
    borderRadius: '24px',
    width: '625px',
    height: '280px',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.2))',
  },
  imgProfilesWrapper: {
    position: 'relative',
  },
  imgProfilesContent: {
    width: '100%',
    height: '100%',
    borderRadius: '24px',
  },
  imgProfilesTextWrapper: {
    position: 'absolute',
    top: '80px',
    left: '32px',
  },
  imgProfilesTextItem: {
    marginTop: '8px',
    color: 'var(--grey-color)',
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '20px',
    opacity: '0.5',
    '&:first-child': {
      marginTop: 0,
    },
  },
  imgProfilesTextItemActive: {
    opacity: 1,
  },

  '@media (max-width: 1350px)': {
    promo: {
      flexWrap: 'wrap',
      paddingBottom: '64px',
    },
    titleWrapper: {
      order: '2',
      margin: '0 auto',
    },
    title: {
      textAlign: 'center',
    },
    descr: {
      textAlign: 'center',
    },
    buttons: {
      justifyContent: 'center',
    },
    imgs: {
      height: '640px',
      margin: '0 auto',
      order: '1',
    },
  },
  '@media (max-width: 992px)': {
    imgs: {
      height: '395px',
    },
    imgPeople: {
      width: '375px',
      height: '226px',
      right: '141px',
      filter: 'drop-shadow(0px 8.605px 25.815px rgba(0, 48, 71, 0.2))',
    },
    imgProfiles: {
      top: '202px',
      right: '207px',
      width: '375px',
      height: '168px',
      filter: 'drop-shadow(0px 8.605px 25.815px rgba(0, 48, 71, 0.2))',
      transition: 'all 0.3s',
    },
    imgProfilesContent: {
      borderRadius: '16px',
    },
    title: {
      fontSize: '48px',
      lineHeight: '56px',
    },
    descr: {
      marginTop: '24px',
      fontSize: '22px',
      lineHeight: '30px',
    },
    imgProfilesTextItem: {
      marginTop: '0',
      fontSize: '8px',
      lineHeight: '16px',
    },
    imgProfilesTextWrapper: {
      top: '47px',
      left: '14px',
    },
  },
  '@media (max-width: 768px)': {
    imgPeople: {
      width: '375px',
      height: '226px',
      right: '44px',
    },
    img2: {
      top: '202px',
      right: '110px',
      width: '375px',
      height: '168px',
    },
    title: {
      fontSize: '44px',
      lineHeight: '52px',
    },
  },
  '@media (max-width: 576px)': {
    titleWrapper: {
      width: '100%',
    },
    imgs: {
      height: '266px',
    },
    imgPeople: {
      borderRadius: '8px',
      width: '268px',
      height: '162px',
      right: 'auto',
      left: 'calc(50% + 24px)',
      transform: 'translateX(-50%)',
    },
    imgProfiles: {
      borderRadius: '8px',
      width: '268px',
      height: '120px',
      top: '145px',
      right: 'auto',
      left: 'calc(50% - 24px)',
      transform: 'translateX(-50%)',
    },
    imgProfilesTextItem: {
      marginTop: '3px',
      fontSize: '5px',
      lineHeight: '8px',
    },
    imgProfilesTextWrapper: {
      top: '34px',
      left: '14px',
    },
    imgProfilesContent: {
      borderRadius: '8px',
    },
    title: {
      marginTop: '40px',
      fontSize: '40px',
      lineHeight: '48px',
    },
    descr: {
      marginTop: '16px',
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: '400',
      '& span': {
        fontWeight: '600',
      },
    },
    buttons: {
      marginTop: '24px',
      display: 'block',
    },
    button: {
      margin: '0 auto',
      fontSize: '18px',
      '&:last-child': {
        marginTop: '16px',
      },
    },
  },
};

export default withStyles(styles)(PromoSection);
