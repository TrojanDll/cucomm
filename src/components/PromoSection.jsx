import React from 'react';
import promoImg1 from './../assets/img/promo-img-1.png';
import promoImg2 from './../assets/img/promo-img-2.png';
import CustomContainer from './CustomContainer';
import { withStyles } from '@material-ui/styles';

class PromoSection extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      offsetY: 0,
    };

    this.parallaxBlockRef = React.createRef();
  }

  handleScroll() {
    this.setState({ offsetY: window.scrollY });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    return () => window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { offsetY } = this.state;
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
              <button className={`${classes.button} ${classes.button1}`}>Try now</button>

              <button className={`${classes.button} ${classes.button2}`}>Book a demo</button>
            </div>
          </div>

          <div className={classes.imgs}>
            <img
              style={isPromoFilter ? {} : { filter: 'none', zIndex: '-1' }}
              className={`${classes.img} ${classes.img1}`}
              src={promoImg1}
              alt="promo-image"
            />

            <div
              ref={this.parallaxBlockRef}
              style={{ transform: `translateY(${offsetY * -0.15}px)` }}
              className={`${classes.img} ${classes.img2}`}>
              <div className={classes.img2Wrapper}>
                <img
                  style={isPromoFilter ? {} : { filter: 'none', zIndex: '-1' }}
                  className={`${classes.img} ${classes.img2Content}`}
                  src={promoImg2}
                  alt="promo-image"
                />
                <div className={classes.img2TextWrapper}>
                  <div className={`${classes.img2TextItem} ${classes.img2TextItemActive}`}>
                    PROFILES
                  </div>
                  <div className={classes.img2TextItem}>COMMON INBOX</div>
                  <div className={classes.img2TextItem}>STATISTICS</div>
                  <div className={classes.img2TextItem}>FUNNEL</div>
                  <div className={classes.img2TextItem}>MESSAGE SCRIPT</div>
                  <div className={classes.img2TextItem}>USER</div>
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
  button1: {
    border: 'none',
    background: 'var(--main-color)',
    color: '#ffffff',
    '&:hover': {
      background: 'var(--hover-color)',
    },
  },
  button2: {
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
  img1: {
    borderRadius: '24px',
    position: 'absolute',
    top: '0',
    right: '0',
    width: '625px',
    height: '378px',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.2))',
  },
  img2: {
    position: 'absolute',
    right: '109px',
    top: '298px',
    borderRadius: '24px',
    width: '625px',
    height: '280px',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.2))',
  },
  img2Wrapper: {
    position: 'relative',
  },
  img2Content: {
    width: '100%',
    height: '100%',
    borderRadius: '24px',
  },
  img2TextWrapper: {
    position: 'absolute',
    top: '80px',
    left: '32px',
  },
  img2TextItem: {
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
  img2TextItemActive: {
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
    img1: {
      width: '375px',
      height: '226px',
      right: '141px',
      filter: 'drop-shadow(0px 8.605px 25.815px rgba(0, 48, 71, 0.2))',
    },
    img2: {
      top: '202px',
      right: '207px',
      width: '375px',
      height: '168px',
      filter: 'drop-shadow(0px 8.605px 25.815px rgba(0, 48, 71, 0.2))',
      transition: 'all 0.3s',
    },
    img2Content: {
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
    img2TextItem: {
      marginTop: '0',
      fontSize: '8px',
      lineHeight: '16px',
    },
    img2TextWrapper: {
      top: '47px',
      left: '14px',
    },
  },
  '@media (max-width: 768px)': {
    img1: {
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
    img1: {
      borderRadius: '8px',
      width: '268px',
      height: '162px',
      right: 'auto',
      left: 'calc(50% + 24px)',
      transform: 'translateX(-50%)',
    },
    img2: {
      borderRadius: '8px',
      width: '268px',
      height: '120px',
      top: '145px',
      right: 'auto',
      left: 'calc(50% - 24px)',
      transform: 'translateX(-50%)',
    },
    img2TextItem: {
      marginTop: '3px',
      fontSize: '5px',
      lineHeight: '8px',
    },
    img2TextWrapper: {
      top: '34px',
      left: '14px',
    },
    img2Content: {
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
