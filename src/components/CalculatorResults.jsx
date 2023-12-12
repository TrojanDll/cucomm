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
        <h4 className={classes.title}>Results</h4>

        <div className={classes.wrapper}>
          <div className={classes.part}>
            <div className={classes.item}>
              <div className={classes.itemText}>Daily sended messages:</div>
              <div className={classes.itemValue}>1,000</div>
            </div>

            <div className={classes.item}>
              <div className={classes.itemText}>Cases booked daily:</div>
              <div className={classes.itemValue}>2</div>
            </div>

            <div className={classes.item}>
              <div className={classes.itemText}>Cases booked monthly:</div>
              <div className={classes.itemValue}>40</div>
            </div>
          </div>

          <div className={classes.part}>
            <div className={`${classes.item} ${classes.itemTextWithQuestion}`}>
              <div className={classes.itemText}>Profit Per Appointment:</div>
              <div className={classes.itemValue}>$ 100</div>
            </div>

            <div className={classes.item}>
              <div className={classes.itemText}>Total Monthly Profit:</div>
              <div className={classes.itemValue}>$ 100</div>
            </div>

            <div className={classes.item}>
              <div className={classes.itemText}>Total Monthly Expenses:</div>
              <div className={classes.itemValue}>$ 100</div>
            </div>
          </div>
        </div>

        <a href="#" className={classes.button}>
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
  title: {
    width: '100%',
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '32px',
  },
  wrapper: {
    display: 'flex',
    columnGap: '120px',
  },
  part: {
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
  item: {
    display: 'flex',
    columnGap: '16px',
    marginTop: '16px',
  },
  itemTextWithQuestion: {
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
  itemText: {
    fontSize: '24px',
    fontWeight: 300,
    lineHeight: '32px',
  },
  itemValue: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '32px',
  },
  button: {
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
    '&:hover': {
      background: 'var(--hover-color)',
    },
  },

  '@media (max-width: 1320px)': {
    wrapper: {
      flexWrap: 'wrap',
    },
    part: {
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
    button: {
      position: 'static',
      marginTop: '24px',
    },
  },

  '@media (max-width: 768px)': {
    item: {
      flexWrap: 'wrap',
    },
    itemValue: {
      width: '100%',
    },
    itemTextWithQuestion: {
      position: 'relative',
      '&::after': {
        position: 'absolute',
        right: 0,
      },
      button: {
        height: '64px',
      },
    },
  },

  '@media (max-width: 576px)': {
    results: {
      padding: '32px 20px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '24px',
    },
    itemText: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    itemValue: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 600,
    },
    button: {
      width: '100%',
      height: '64px',
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 600,
    },
  },
};

export default withStyles(styles)(CalculatorResults);
