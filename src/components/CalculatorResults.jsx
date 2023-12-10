import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';

class CalculatorResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.results}>
        <h4 className={classes.results__title}>Results</h4>

        <div className={classes.results__wrapper}>
          <div className={classes.results__part}>
            <div className={classes.results__item}>
              <div className={classes.results__item__text}>Daily sended messages:</div>
              <div className={classes.results__item__value}>1,000</div>
            </div>

            <div className={classes.results__item}>
              <div className={classes.results__item__text}>Cases booked daily:</div>
              <div className={classes.results__item__value}>2</div>
            </div>

            <div className={classes.results__item}>
              <div className={classes.results__item__text}>Cases booked monthly:</div>
              <div className={classes.results__item__value}>40</div>
            </div>
          </div>

          <div className={classes.results__part}>
            <div className={`${classes.results__item} ${classes.results__item__text_withQuestion}`}>
              <div className={classes.results__item__text}>Profit Per Appointment:</div>
              <div className={classes.results__item__value}>$ 100</div>
            </div>

            <div className={classes.results__item}>
              <div className={classes.results__item__text}>Total Monthly Profit:</div>
              <div className={classes.results__item__value}>$ 100</div>
            </div>

            <div className={classes.results__item}>
              <div className={classes.results__item__text}>Total Monthly Expenses:</div>
              <div className={classes.results__item__value}>$ 100</div>
            </div>
          </div>
        </div>

        <a href="#" className={classes.results__button}>
          Try CUCOMM
        </a>
      </div>
    );
  }
}

const styles = {
  results: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '16px',
    borderRadius: '24px',
    background: 'var(--lightest-grey-color)',
    flexShrink: 0,
    padding: '32px 45px 40px 45px',
  },
  results__title: {
    width: '100%',
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '32px',
  },
  results__wrapper: {
    display: 'flex',
    columnGap: '120px',
  },
  results__part: {
    position: 'relative',
    '&:first-child': {
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        bottom: 0,
        right: '-75px',
        width: '1px',
        height: '122px',
        background: 'var(--light-grey-color)',
      },
    },
  },
  results__item: {
    display: 'flex',
    columnGap: '16px',
    marginTop: '16px',
  },
  results__item__text_withQuestion: {
    '&::after': {
      content: '"?"',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '32px',
      height: '32px',
      borderRadius: '100%',
      background: '#ffffff',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '24px',
      color: 'var(--main-color)',
      cursor: 'pointer',
    },
  },
  results__item__text: {
    fontSize: '24px',
    fontWeight: 300,
    lineHeight: '32px',
  },
  results__item__value: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '32px',
  },
  results__button: {
    position: 'absolute',
    bottom: '20px',
    right: '45px',
    display: 'block',
    width: '212px',
    height: '72px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '9999px',
    background: 'var(--main-color)',
    color: '#ffffff',
    fontWeight: 500,
    lineHeight: '32px',
    fontSize: '24px',
    cursor: 'pointer',
  },

  '@media (max-width: 1320px)': {
    results__wrapper: {
      flexWrap: 'wrap',
    },
    results__part: {
      '&:first-child': {
        '&::after': {
          bottom: '-24px',
          right: '0',
          width: '100%',
          height: '1px',
        },
      },
      '&:last-child': {
        marginTop: '32px',
      },
    },
  },

  '@media (max-width: 992px)': {
    results__button: {
      position: 'static',
      marginTop: '24px',
    },
  },

  '@media (max-width: 768px)': {
    results__item: {
      flexWrap: 'wrap',
    },
    results__item__value: {
      width: '100%',
    },
    results__item__text_withQuestion: {
      position: 'relative',
      '&::after': {
        position: 'absolute',
        right: 0,
      },
      results__button: {
        height: '64px',
      },
    },
  },

  '@media (max-width: 576px)': {
    results: {
      padding: '32px 20px',
    },
    results__title: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '24px',
    },
    results__item__text: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    results__item__value: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 600,
    },
    results__button: {
      width: '100%',
      height: '64px',
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 600,
    },
  },
};

export default withStyles(styles)(CalculatorResults);
