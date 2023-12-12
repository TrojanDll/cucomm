import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import CustomContainer from './CustomContainer';
import CalculatorSwitcher from '../ui/CalculatorSwitcher';
import CustomInput from '../ui/CustomInput';
import CalculatorResults from './CalculatorResults';

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
            <h2 className={classes.title}>Calculate Booked Appointments and Profit</h2>
            <div className={classes.switcher}>
              <CalculatorSwitcher
                toggleIsFirstPage={toggleIsFirstPage}
                firstParameter="For yourself"
                secondParameter="For clients"
                isSmall={false}
              />
            </div>

            <form name="calculator-for-yourself" className={classes.contentWrapper}>
              <div
                className={classes.forYourself}
                style={isFirstPage ? { display: 'block' } : { display: 'none' }}>
                <div className={classes.forYourselfBooked}>
                  <h4 className={classes.forYourselfBookedTitle}>Booked Appointments</h4>

                  <div className={classes.forYourselfBookedInputs}>
                    <div className={classes.forYourselfBookedInput}>
                      <CustomInput title="Accounts in use" />
                    </div>

                    <div className={classes.forYourselfBookedInput}>
                      <CustomInput
                        placeholder="%"
                        title="Conversion to accepted friend request (FR)"
                      />
                    </div>

                    <div className={classes.forYourselfBookedInput}>
                      <CustomInput
                        placeholder="%"
                        title="Conversion from accepted FR to booked call"
                      />
                    </div>
                  </div>

                  <button
                    className={classes.forYourselfButton}
                    onClick={(e) => toggleResultsVisibility(e)}>
                    Calculate
                  </button>
                </div>

                <div className={classes.forYourselfProfit}>
                  <h4 className={classes.forYourselfProfitTitle}>Profit</h4>

                  <div className={classes.forYourselfProfitInputsWrapper}>
                    <div className={classes.forYourselfProfitInputs}>
                      <div className={classes.forYourselfProfitInput}>
                        <CustomInput placeholder="%" title="Conversion from call to sale" />
                      </div>
                      <div className={classes.forYourselfProfitInput}>
                        <CustomInput withDollar title="Average earnings from 1 client" />
                      </div>
                      <div className={classes.forYourselfProfitInput}>
                        <CustomInput withDollar title="Employee monthly expenses" />
                      </div>
                    </div>

                    <div className={classes.forYourselfProfitInputs}>
                      <div className={classes.forYourselfProfitInput}>
                        <CustomInput withDollar title="Account" />
                      </div>
                      <div className={classes.forYourselfProfitInput}>
                        <CustomInput withDollar title="Software" />
                      </div>
                      <div className={classes.forYourselfProfitInput}>
                        <CustomInput withDollar title="Proxies" />
                      </div>
                    </div>
                  </div>

                  <button
                    className={classes.forYourselfButton}
                    onClick={(e) => toggleResultsVisibility(e)}>
                    Calculate
                  </button>
                </div>
              </div>

              <div
                className={`${classes.forClients} ${classes.forYourself}`}
                style={isFirstPage ? { display: 'none' } : { display: 'block' }}>
                <div className={classes.forYourselfBooked}>
                  <h4 className={classes.forYourselfBookedTitle}>Booked Appointments</h4>

                  <div className={classes.forYourselfBookedInputs}>
                    <div className={classes.forYourselfBookedInput}>
                      <CustomInput title="Accounts in use" />
                    </div>

                    <div className={classes.forYourselfBookedInput}>
                      <CustomInput
                        placeholder="%"
                        title="Conversion to accepted friend request (FR)"
                      />
                    </div>

                    <div className={classes.forYourselfBookedInput}>
                      <CustomInput
                        placeholder="%"
                        title="Conversion from accepted FR to booked call"
                      />
                    </div>
                  </div>

                  <button
                    className={classes.forYourselfButton}
                    onClick={(e) => toggleResultsVisibility(e)}>
                    Calculate
                  </button>
                </div>

                <div className={classes.forYourselfProfit}>
                  <h4 className={classes.forYourselfProfitTitle}>Profit</h4>

                  <div className={classes.forYourselfProfitInputsWrapper}>
                    <div className={classes.forYourselfProfitInputs}>
                      <div className={classes.forYourselfProfitSwitcher}>
                        <div className={classes.forYourselfProfitSwitcherText}>Type of payment</div>
                        <CalculatorSwitcher
                          firstParameter="Monthly Fix"
                          secondParameter="Per Appointment"
                          isSmall={true}
                        />
                      </div>
                      <div className={classes.forYourselfProfitInput}>
                        <CustomInput withDollar title="Average earnings from 1 client" />
                      </div>
                      <div className={classes.forYourselfProfitInput}>
                        <CustomInput withDollar title="Employee monthly expenses" />
                      </div>
                    </div>

                    <div className={classes.forYourselfProfitInputs}>
                      <div className={classes.forYourselfProfitInput}>
                        <CustomInput withDollar title="Account" />
                      </div>
                      <div className={classes.forYourselfProfitInput}>
                        <CustomInput withDollar title="Software" />
                      </div>
                      <div className={classes.forYourselfProfitInput}>
                        <CustomInput withDollar title="Proxies" />
                      </div>
                    </div>
                  </div>

                  <button
                    className={classes.forYourselfButton}
                    onClick={(e) => toggleResultsVisibility(e)}>
                    Calculate
                  </button>
                </div>
              </div>
            </form>

            <div
              className={classes.results}
              style={resultsOpened ? { display: 'block' } : { display: 'none' }}>
              <CalculatorResults />
            </div>
          </div>
        </CustomContainer>
      </section>
    );
  }
}

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
  title: {
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: '48px',
    textAlign: 'center',
  },
  switcher: {
    marginTop: '24px',
    display: 'flex',
    justifyContent: 'center',
  },
  contentWrapper: {
    marginTop: '32px',
    width: '100%',
    height: '464px',
    borderRadius: '24px',
    border: '1px solid var(--light-grey-color)',
    borderCollapse: 'collapse',
  },
  forYourselfBooked: {
    marginTop: '32px',
    marginLeft: '45px',
  },
  forYourselfBookedTitle: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '32px',
  },
  forYourselfBookedInput: {
    marginTop: '20px',
  },
  forYourselfButton: {
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
    '&:hover': {
      border: '1px solid var(--hover-color)',
      color: 'var(--hover-color)',
    },
  },
  forYourself: {
    position: 'relative',
  },
  forYourselfProfit: {
    position: 'absolute',
    top: '-33px',
    right: '-1px',
    width: '715px',
    height: '464px',
    borderRadius: '24px',
    border: '1px solid var(--light-grey-color)',
    padding: '35px 45px 40px',
  },
  forYourselfProfitTitle: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '32px',
  },
  forYourselfProfitInputsWrapper: {
    display: 'flex',
    columnGap: '30px',
  },
  forYourselfProfitInputs: {
    width: '297px',
  },
  forYourselfProfitInput: {
    display: 'inline-flex',
    marginTop: '20px',
  },
  forYourselfProfitSwitcher: {
    marginTop: '20px',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
  },

  '@media (max-width: 1320px)': {
    calculatorWrapper: {
      minHeight: '1230px',
    },
    forYourselfProfit: {
      padding: '40px 45px 40px',
      marginTop: '20px',
      position: 'relative',
      top: '4px',
      right: '0',
      width: '100%',
      borderTop: '0px',
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0',
    },
    results: {
      marginTop: '460px',
    },
  },

  '@media (max-width: 992px)': {
    calculator: {
      paddingTop: '64px',
    },
    calculatorWrapper: {
      minHeight: '1550px',
    },
    forYourselfProfitInputsWrapper: {
      flexWrap: 'wrap',
    },
    forYourselfProfit: {
      height: 'auto',
      margin: 0,
      top: '-19px',
    },
    forYourselfBooked: {
      height: '432px',
    },
    results: {
      marginTop: '764px',
    },
  },

  '@media (max-width: 768px)': {
    title: {
      fontSize: '44px',
      lineHeight: '56px',
    },
    calculatorWrapper: {
      minHeight: '1610px',
    },
  },

  '@media (max-width: 576px)': {
    title: {
      fontSize: '32px',
      lineHeight: '40px',
    },
    switcher: {
      padding: '0 20px',
    },
    calculatorWrapper: {
      minHeight: '1530px',
      padding: '64px 10px 10px 10px',
    },
    forYourselfBooked: {
      margin: 0,
      padding: '32px 20px 0 20px',
      height: '450px',
    },
    forYourselfBookedTitle: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '24px',
    },
    contentWrapper: {
      height: '485px',
    },
    forYourselfProfit: {
      padding: '42px 20px',
      height: 'auto',
      margin: 0,
      top: '17px',
    },
    forYourselfProfitTitle: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 600,
    },
  },

  // '@media (max-width: 387px)': {
  //   forYourselfProfit: {
  //     marginTop: '18px',
  //   },
  // },
};

export default withStyles(styles)(CalculatorSection);
