import React from 'react';
import scaleImg from './../assets/img/scale-us.png';
import listPoint from './../assets/img/icons/list-point.svg';
import CustomContainer from './CustomContainer';
import { withStyles } from '@material-ui/styles';

const styles = {
  scale: {
    backgroundColor: 'var(--lightest-grey-color)',
    paddingTop: '170px',
  },
  scaleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  scale__textWrapper: {
    maxWidth: '625px',
  },
  scale__sign: {
    width: '90px',
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
  scale__title: {
    marginTop: '24px',
    fontSize: '48px',
    fontWeight: '500',
    lineHeight: '56px',
  },
  scale__list: {
    marginTop: '40px',
  },
  scale__listItem: {
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
      background: `url(${listPoint}) center center/cover no-repeat`,
    },
  },
  scale__buttons: {
    marginTop: '40px',
    display: 'flex',
    columnGap: '16px',
  },
  scale__button: {
    height: '72px',
    width: '166px',
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
  scale__button1: {
    border: 'none',
    background: 'var(--main-color)',
    '& :hover': {
      background: 'var(--hover-color)',
    },
  },
  scale__button1: {
    background: 'transparent',
    border: '1px solid var(--main-color)',
    '& :hover': {
      border: '1px solid var(--hover-color)',
    },
  },
};

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
            <img src={scaleImg} alt="scale" className="scale__img" />
            <div className={classes.scale__textWrapper}>
              <div className={`${classes.scale__sign} ${classes.sign}`}>
                SOLUTION
              </div>

              <h2 className={classes.scale__title}>
                Scale as much as you want without limits
              </h2>

              <ul className={classes.scale__list}>
                <li className={classes.scale__listItem}>Automated parsing</li>
                <li className={classes.scale__listItem}>Targeting</li>
                <li className={classes.scale__listItem}>
                  Automated cold outreach with follow-ups
                </li>
                <li className={classes.scale__listItem}>
                  Split-test messages / Facebook accounts
                </li>
                <li className={classes.scale__listItem}>CRM</li>
                <li className={classes.scale__listItem}>Detailed statistics</li>
                <li className={classes.scale__listItem}>
                  Multi-account anti-detect browser in place
                </li>
                <li className={classes.scale__listItem}>
                  Simple straightforward interface
                </li>
              </ul>

              <div className={classes.scale__buttons}>
                <button
                  primary="true"
                  fixedSize
                  width="166px"
                  height="64px"
                  fontSize="18px"
                  className={`${classes.scale__button} ${classes.scale__button1}`}
                >
                  Try now
                </button>
                <button
                  outlined="true"
                  fixedSize
                  width="166px"
                  height="64px"
                  fontSize="18px"
                  className={`${classes.scale__button} ${classes.scale__button1}`}
                >
                  Book a demo
                </button>
              </div>
            </div>
          </div>
        </CustomContainer>
      </section>
    );
  }
}
export default withStyles(styles)(ScaleUsSection);
