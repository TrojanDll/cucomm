import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';

const styles = {
  results: {
    marginTop: '16px',
    borderRadius: '24px',
    background: 'var(--lightest-grey-color)',
    flexShrink: 0,
    padding: '32px 45px 20px 45px',
  },
  results__title: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '32px',
  },
  results__wrapper: {
    display: 'flex',
  },
  results__part: {
    position: 'relative',
    '&:first-child': {
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: '-75px',
        width: '1px',
        height: '100%',
        background: 'var(--light-grey-color)',
      },
    },
  },
  results__item: {
    display: 'flex',
    columnGap: '16px',
    marginTop: '16px',
  },
};

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
            <div className={classes.results__item}>
              <div
                className={`${classes.results__item__text} ${classes.results__item__text_withQuestion}`}>
                Profit Per Appointment:
              </div>
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

        <button className={classes.results__button}>Try CUCOMM</button>
      </div>
    );
  }
}
export default withStyles(styles)(CalculatorResults);
