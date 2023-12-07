import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import CustomContainer from './CustomContainer';
import CalculatorSwitcher from '../ui/CalculatorSwitcher';
import CustomInput from '../ui/CustomInput';
import CalculatorResults from './CalculatorResults';

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
  calculator__contentWrapper: {
    marginTop: '32px',
    width: '100%',
    height: '464px',
    borderRadius: '24px',
    border: '1px solid var(--light-grey-color)',
    // padding: '35px 45px 40px',
    borderCollapse: 'collapse',
  },
  calculator__forYourself__booked: {
    marginTop: '32px',
    marginLeft: '45px',
  },
  calculator__forYourself__booked__title: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '32px',
  },
  calculator__forYourself__booked__input: {
    marginTop: '20px',
  },
  calculator__forYourself__button: {
    marginTop: '24px',
    width: '138px',
    height: '48px',
    borderRadius: '200px',
    border: '1px solid var(--main-color)',
    color: 'var(--main-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '24px',
  },
  calculator__forYourself: {
    position: 'relative',
  },
  calculator__forYourself__profit: {
    position: 'absolute',
    top: '-33px',
    right: '-1px',
    width: '715px',
    height: '464px',
    borderRadius: '24px',
    border: '1px solid var(--light-grey-color)',
    padding: '35px 45px 40px',
  },
  calculator__forYourself__profit__title: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '32px',
  },
  calculator__forYourself__profit__inputsWrapper: {
    display: 'flex',
    columnGap: '30px',
  },
  calculator__forYourself__profit__inputs: {
    width: '297px',
  },
  calculator__forYourself__profit__input: {
    display: 'inline-flex',
    marginTop: '20px',
  },
  calculator__forYourself__profit__switcherText: {
    marginTop: '20px',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
  },
};

class CalculatorSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsOpened: false,
      isFirstPage: true,
    };
  }

  render() {
    const { classes } = this.props;
    const { resultsOpened, isFirstPage } = this.state;

    const toggleResultsVisibility = (e) => {
      e.preventDefault();
      this.setState({ resultsOpened: true });
    };

    const toggleIsFirstPage = () => {
      this.setState({ isFirstPage: !isFirstPage });
    };

    return (
      <section className={classes.calculator}>
        <CustomContainer>
          <div className={classes.calculatorWrapper}>
            <h2 className={classes.calculator__title}>Calculate Booked Appointments and Profit</h2>
            <div className={classes.calculator__switcher}>
              <CalculatorSwitcher
                toggleIsFirstPage={toggleIsFirstPage}
                firstParameter="For yourself"
                secondParameter="For clients"
                isSmall={false}
              />
            </div>

            <form name="calculator-for-yourself" className={classes.calculator__contentWrapper}>
              <div
                className={classes.calculator__forYourself}
                style={isFirstPage ? { display: 'block' } : { display: 'none' }}>
                <div className={classes.calculator__forYourself__booked}>
                  <h4 className={classes.calculator__forYourself__booked__title}>
                    Booked Appointments
                  </h4>

                  <div className={classes.calculator__forYourself__booked__inputs}>
                    <div className={classes.calculator__forYourself__booked__input}>
                      <CustomInput title="Accounts in use" />
                    </div>

                    <div className={classes.calculator__forYourself__booked__input}>
                      <CustomInput
                        placeholder="%"
                        title="Conversion to accepted friend request (FR)"
                      />
                    </div>

                    <div className={classes.calculator__forYourself__booked__input}>
                      <CustomInput
                        placeholder="%"
                        title="Conversion from accepted FR to booked call"
                      />
                    </div>
                  </div>

                  <button
                    className={classes.calculator__forYourself__button}
                    onClick={(e) => toggleResultsVisibility(e)}>
                    Calculate
                  </button>
                </div>

                <div className={classes.calculator__forYourself__profit}>
                  <h4 className={classes.calculator__forYourself__profit__title}>Profit</h4>

                  <div className={classes.calculator__forYourself__profit__inputsWrapper}>
                    <div className={classes.calculator__forYourself__profit__inputs}>
                      <div className={classes.calculator__forYourself__profit__input}>
                        <CustomInput placeholder="%" title="Conversion from call to sale" />
                      </div>
                      <div className={classes.calculator__forYourself__profit__input}>
                        <CustomInput withDollar title="Average earnings from 1 client" />
                      </div>
                      <div className={classes.calculator__forYourself__profit__input}>
                        <CustomInput withDollar title="Employee monthly expenses" />
                      </div>
                    </div>

                    <div className={classes.calculator__forYourself__profit__inputs}>
                      <div className={classes.calculator__forYourself__profit__input}>
                        <CustomInput withDollar title="Account" />
                      </div>
                      <div className={classes.calculator__forYourself__profit__input}>
                        <CustomInput withDollar title="Software" />
                      </div>
                      <div className={classes.calculator__forYourself__profit__input}>
                        <CustomInput withDollar title="Proxies" />
                      </div>
                    </div>
                  </div>

                  <button
                    className={classes.calculator__forYourself__button}
                    onClick={(e) => toggleResultsVisibility(e)}>
                    Calculate
                  </button>
                </div>
              </div>

              <div
                className={`${classes.calculator__forClients} ${classes.calculator__forYourself}`}
                style={isFirstPage ? { display: 'none' } : { display: 'block' }}>
                <div className={classes.calculator__forYourself__booked}>
                  <h4 className={classes.calculator__forYourself__booked__title}>
                    Booked Appointments
                  </h4>

                  <div className={classes.calculator__forYourself__booked__inputs}>
                    <div className={classes.calculator__forYourself__booked__input}>
                      <CustomInput title="Accounts in use" />
                    </div>

                    <div className={classes.calculator__forYourself__booked__input}>
                      <CustomInput
                        placeholder="%"
                        title="Conversion to accepted friend request (FR)"
                      />
                    </div>

                    <div className={classes.calculator__forYourself__booked__input}>
                      <CustomInput
                        placeholder="%"
                        title="Conversion from accepted FR to booked call"
                      />
                    </div>
                  </div>

                  <button
                    className={classes.calculator__forYourself__button}
                    onClick={(e) => toggleResultsVisibility(e)}>
                    Calculate
                  </button>
                </div>

                <div className={classes.calculator__forYourself__profit}>
                  <h4 className={classes.calculator__forYourself__profit__title}>Profit</h4>

                  <div className={classes.calculator__forYourself__profit__inputsWrapper}>
                    <div className={classes.calculator__forYourself__profit__inputs}>
                      <div className={classes.calculator__forYourself__profit__switcher}>
                        <div className={classes.calculator__forYourself__profit__switcherText}>
                          Type of payment
                        </div>
                        <CalculatorSwitcher
                          firstParameter="Monthly Fix"
                          secondParameter="Per Appointment"
                          isSmall={true}
                        />
                      </div>
                      <div className={classes.calculator__forYourself__profit__input}>
                        <CustomInput withDollar title="Average earnings from 1 client" />
                      </div>
                      <div className={classes.calculator__forYourself__profit__input}>
                        <CustomInput withDollar title="Employee monthly expenses" />
                      </div>
                    </div>

                    <div className={classes.calculator__forYourself__profit__inputs}>
                      <div className={classes.calculator__forYourself__profit__input}>
                        <CustomInput withDollar title="Account" />
                      </div>
                      <div className={classes.calculator__forYourself__profit__input}>
                        <CustomInput withDollar title="Software" />
                      </div>
                      <div className={classes.calculator__forYourself__profit__input}>
                        <CustomInput withDollar title="Proxies" />
                      </div>
                    </div>
                  </div>

                  <button
                    className={classes.calculator__forYourself__button}
                    onClick={(e) => toggleResultsVisibility(e)}>
                    Calculate
                  </button>
                </div>
              </div>
            </form>

            <div
              className={classes.calculator__results}
              style={resultsOpened ? { display: 'block' } : { display: 'none' }}>
              <CalculatorResults />
            </div>
          </div>
        </CustomContainer>
      </section>
    );
  }
}

export default withStyles(styles)(CalculatorSection);
