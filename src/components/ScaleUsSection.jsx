import React from 'react';
import scaleImgTop from './../assets/img/scale-us-img-top.png';
import scaleImgBottom from './../assets/img/scale-us-img-bottom.png';
import listPoint from './../assets/img/listPoint.svg';
import CustomContainer from './CustomContainer';
import { withStyles } from '@material-ui/styles';
import CustomCloud from '../ui/CustomCloud';

class ScaleUsSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.scale}>
        <CustomContainer>
          <div className={classes.scaleWrapper}>
            <div className={classes.imgWrapper}>
              <img src={scaleImgTop} className={classes.scaleImgTop} alt="scale" />
              <img src={scaleImgBottom} className={classes.scaleImgBottom} alt="scale" />

              <div className={classes.cloud}>
                <CustomCloud tailLeft="true" text="Limited by outbound messages limits?" />
              </div>

              <div className={classes.cloud}>
                <CustomCloud text="Don't get enough qualified high-ticket calls?" />
              </div>

              <div className={classes.cloud}>
                <CustomCloud
                  tailLeft="true"
                  text="Wasting too much time clicking the same buttons for outreach?"
                />
              </div>

              <div className={classes.cloud}>
                <CustomCloud text="Tools don't automate enough?" />
              </div>

              <div className={classes.cloud}>
                <CustomCloud
                  tailLeft="true"
                  text="Struggle visiting the same profiles again and again?"
                />
              </div>
            </div>
            <div className={classes.textWrapper}>
              <div className={`${classes.sign} ${classes.sign}`}>SOLUTION</div>

              <h2 className={classes.title}>Scale as much as you want without limits</h2>

              <ul className={classes.list}>
                <li className={classes.listItem}>Automated parsing</li>
                <li className={classes.listItem}>Targeting</li>
                <li className={classes.listItem}>Automated cold outreach with follow-ups</li>
                <li className={classes.listItem}>Split-test messages / Facebook accounts</li>
                <li className={classes.listItem}>CRM</li>
                <li className={classes.listItem}>Detailed statistics</li>
                <li className={classes.listItem}>Multi-account anti-detect browser in place</li>
                <li className={classes.listItem}>Simple straightforward interface</li>
              </ul>

              <div className={classes.buttons}>
                <button className={`${classes.button} ${classes.button1}`}>Try now</button>
                <button className={`${classes.button} ${classes.button2}`}>Book a demo</button>
              </div>
            </div>
          </div>
        </CustomContainer>
      </section>
    );
  }
}

const styles = {
  scale: {
    backgroundColor: 'var(--lightest-grey-color)',
    paddingTop: '170px',
  },
  scaleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  imgWrapper: {
    position: 'relative',
    rowGap: 0,
    width: '523px',
    height: '632px',
  },
  scaleImgTop: {
    width: '100%',
    height: 'auto',
    marginTop: '65px',
  },
  cloud: {
    position: 'absolute',
    '&:nth-child(3)': {
      top: 0,
      right: 0,
    },
    '&:nth-child(4)': {
      top: '80px',
    },
    '&:nth-child(5)': {
      top: '424px',
    },
    '&:nth-child(6)': {
      top: '504px',
      right: 0,
    },
    '&:nth-child(7)': {
      bottom: 0,
    },
  },
  scaleImgBottom: {
    width: '100%',
    height: 'auto',
  },
  textWrapper: {
    maxWidth: '625px',
  },
  sign: {
    display: 'inline-flex',
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
    fontSize: '48px',
    fontWeight: '500',
    lineHeight: '56px',
  },
  list: {
    marginTop: '40px',
  },
  listItem: {
    marginTop: '16px',
    display: 'flex',
    columnGap: '24px',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: '400',
    '&:first-child': {
      marginTop: '0',
    },
    '&::before': {
      content: '""',
      display: 'block',
      marginTop: '8px',
      width: '8px',
      height: '9px',
      background: `url("${listPoint}") center center/cover no-repeat`,
    },
  },
  buttons: {
    marginTop: '40px',
    display: 'flex',
    columnGap: '16px',
  },
  button: {
    height: '72px',
    width: '166px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '9999px',
    fontWeight: '500',
    fontSize: '24px',
    lineHeight: '32px',
    fontSize: '18px',
    '&:focus': {
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
    color: 'var(--main-color)',
    border: '1px solid var(--main-color)',
    '&:hover': {
      border: '1px solid var(--hover-color)',
      color: 'var(--hover-color)',
    },
  },

  '@media (max-width: 1320px)': {
    scale: {
      paddingTop: '72px',
    },
    scaleWrapper: {
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    sign: {
      margin: '0 auto',
      marginTop: '40px',
    },
    title: {
      textAlign: 'center',
    },

    buttons: {
      justifyContent: 'center',
    },
  },
  '@media (max-width: 768px)': {
    title: {
      fontSize: '44px',
      lineHeight: '52px',
    },
  },
  '@media (max-width: 576px)': {
    imgWrapper: {
      width: '312px',
      height: '377px',
    },
    scale: {
      paddingTop: '64px',
    },
    title: {
      fontSize: '32px',
      lineHeight: '40px',
    },
    textWrapper: {
      maxWidth: '100%',
    },
    list: {
      marginTop: '32px',
    },
    scaleImgTop: {
      marginTop: '38px',
    },
    cloud: {
      position: 'absolute',
      '&:nth-child(3)': {
        top: 0,
        right: 0,
      },
      '&:nth-child(4)': {
        top: '48px',
      },
      '&:nth-child(5)': {
        top: '255px',
      },
      '&:nth-child(6)': {
        top: '304px',
        right: 0,
      },
      '&:nth-child(7)': {
        bottom: 0,
      },
    },
  },
};

export default withStyles(styles)(ScaleUsSection);
