import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import CustomContainer from './CustomContainer';
import substrate from './../assets/img/cardSubtract.svg';

class AboutSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.aboutSection}>
        <CustomContainer>
          <div className={classes.wrapper}>
            <div className={classes.textItem}>
              <div className={classes.sign}>ABOUT US</div>

              <div className={classes.text}>
                We have been working on Facebook automation for 3 years and we run our own Marketing
                Agency using CUCOMM, so we know all the pitfalls that might have happened on your
                way.
              </div>
              <div className={classes.subText}>
                Thanks to our agency and close contact with our clients we implemented 1 silver
                bullet to all cold outreach problems you might have. Our tech-heavy team has a lot
                of experience in the field and had 3 years to implement everything, so you won’t
                experience any lack of features.
              </div>
            </div>

            <div className={classes.cardItem}>
              <div className={classes.cardItemTitle}>Reach your ideal customers with CUCOMM</div>
              <div className={classes.cardItemSubTitle}>
                Try out our product for free lorem ipsum dolor
              </div>

              <div className={classes.inputWrapper}>
                <input placeholder="Your email" className={classes.input} type="text" />
                <button className={classes.button}>Start for free</button>
              </div>
            </div>
          </div>
        </CustomContainer>
      </section>
    );
  }
}

const styles = {
  aboutSection: {
    padding: '112px 0',
    background: 'var(--lightest-grey-color)',
  },
  wrapper: {
    display: 'flex',
    columnGap: '80px',
  },
  sign: {
    width: '92px',
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
  text: {
    marginTop: '32px',
    fontSize: '24px',
    fontWeight: 300,
    lineHeight: '32px',
  },
  subText: {
    marginTop: '24px',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  cardItem: {
    padding: '72px 64px',
    position: 'relative',
    flexShrink: 0,
    width: '625px',
    height: '320px',
    background: `url("${substrate}") center center/cover no-repeat`,
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.20))',
  },
  cardItemTitle: {
    color: 'var(--main-color)',
    fontSize: '24px',
    fontWeight: 500,
    textAlign: 'center',
  },
  cardItemSubTitle: {
    marginTop: '16px',
    fontSize: '18px',
    fontWeight: 400,
    textAlign: 'center',
  },
  inputWrapper: {
    marginTop: '32px',
    padding: '4px 4px 4px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '497px',
    height: '72px',
    borderRadius: '9999px',
    border: '1px solid var(--light-grey-color)',
  },
  input: {
    fontSize: '18px',
    fontWeight: 500,
    height: 'calc(100% - 8px)',
    width: '290px',
    '&::placeholder': {
      fontSize: '18px',
      fontWeight: 400,
      opacity: '0.5',
    },
  },
  button: {
    width: '170px',
    height: '64px',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    background: 'var(--main-color)',
    fontSize: '18px',
    fontWeight: 600,
    '&:hover': {
      background: 'var(--hover-color)',
    },
  },

  '@media (max-width: 1320px)': {
    wrapper: {
      flexWrap: 'wrap',
      rowGap: '48px',
    },
    sign: {
      margin: '0 auto',
    },
    cardItem: {
      margin: '0 auto',
    },
  },

  '@media (max-width: 768px)': {
    cardItem: {
      width: '100%',
      background: 'none',
      background: '#ffffff',
      borderRadius: '24px',
    },
    inputWrapper: {
      width: '100%',
    },
    cardItemTitle: {
      fontSize: '22px',
    },
  },

  '@media (max-width: 576px)': {
    aboutSection: {
      padding: '64px 0',
    },
    text: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    cardItem: {
      padding: '40px 30px',
      height: 'auto',
    },
    inputWrapper: {
      border: 'none',
      flexWrap: 'wrap',
      rowGap: '8px',
      padding: 0,
      height: 'auto',
    },
    input: {
      height: '64px',
      width: '100%',
      border: '1px solid var(--light-grey-color)',
      borderRadius: '9999px',
      padding: '0 20px',
      '&::placeholder': {
        textAlign: 'center',
      },
    },
    button: {
      width: '100%',
    },
  },
};

export default withStyles(styles)(AboutSection);
