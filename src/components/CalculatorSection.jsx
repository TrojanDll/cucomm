import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import CustomContainer from './CustomContainer';
import CalculatorSwitcher from '../ui/CalculatorSwitcher';

const styles = {
  calculator: {
    paddingTop: '112px',
    backgroundColor: 'var(--lightest-grey-color)',
  },
  calculatorWrapper: {
    padding: '80px 64px 64px 64px',
    width: '100%',
    minHeight: '768px',
    borderRadius: '24px',
    background: '#fff',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.2))',
  },
  calculator__title: {
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: '48px',
    textAlign: 'center',
  },
  calculator__switcher: {
    marginTop: '24px',
    display: 'flex',
    justifyContent: 'center',
  },
};

class CalculatorSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.calculator}>
        <CustomContainer>
          <div className={classes.calculatorWrapper}>
            <h2 className={classes.calculator__title}>
              Calculate Booked Appointments and Profit
            </h2>
            <div className={classes.calculator__switcher}>
              <CalculatorSwitcher />
            </div>

            <div className={classes.calculator__contentWrapper}>
              <form
                name="calculator-for-yourself"
                className={classes.calculator__content__forYourself}
              ></form>
            </div>
          </div>
        </CustomContainer>
      </section>
    );
  }
}

export default withStyles(styles)(CalculatorSection);
