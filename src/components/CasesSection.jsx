import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import CustomContainer from './CustomContainer';
import listPoint from './../assets/img/listPoint.svg';
import casesImg from './../assets/img/cases-img.png';

class CasesSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.casesSection}>
        <CustomContainer>
          <div className={classes.sign}>CASES</div>
          <h2 className={classes.title}>Cases lorem ipsum</h2>

          <div className={classes.caseWrapper}>
            <div className={classes.caseItem}>
              <div className={classes.caseItemTitle}>DataFuel</div>
              <div className={classes.caseItemSubTitle}>They sell B2B-service via Facebook</div>
              <div className={classes.caseItemDescr}>
                With CUCOMM, SDRs have freed up 75% of their time ($33,750 in cash)
              </div>
              <div className={`${classes.caseItemSign} ${classes.sign}`}>WHAT THEY HAD</div>

              <ul className={classes.caseItemlist}>
                <li className={classes.caseItemlistItem}>Sales Development Representatives: 3</li>
                <li className={classes.caseItemlistItem}>
                  Time spend on Facebook communications before CUCOMM (per SDR): 2 hours per day (6
                  hours per day in total)
                </li>
                <li className={classes.caseItemlistItem}>Average SDR salary $60,000</li>
              </ul>

              <div className={classes.caseSubItem}>
                <div className={classes.caseSubItemTitle}>With CUCOMM 4 times faster</div>

                <ul className={classes.caseItemlist}>
                  <li className={classes.caseItemlistItem}>
                    Time spend on Facebook communications with CUCOMM (per SDR): 30 minutes per day
                    (1,5 hours per day in total)
                  </li>
                  <li className={classes.caseItemlistItem}>
                    Saved time per agent pet year: 1,5*260=390 hours (48,75 days) per year
                  </li>
                  <li className={classes.caseItemlistItem}>
                    Saved money per year per agent: 60,000/260/8*390=$11,250 saved
                  </li>
                  <li className={classes.caseItemlistItem}>
                    Saved money per year in total: $11,250*3=$33,750 saved in total
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={classes.caseWrapper}>
            <div className={classes.caseItem}>
              <div className={classes.caseItemTitle}>Canadian marketing platform for realtors</div>
              <div className={classes.caseItemSubTitle}>
                Looking for Real Estate Agents to sell them their marketing platform
              </div>
              <div className={classes.caseItemDescr}>
                With CUCOMM amount of sales increased by 2 times
              </div>
              <div className={`${classes.caseItemSign} ${classes.sign}`}>WHAT THEY HAD</div>

              <ul className={classes.caseItemlist}>
                <li className={classes.caseItemlistItem}>Sales Development Representatives: 10</li>
                <li className={classes.caseItemlistItem}>SDR send messages per month: 6,300</li>
                <li className={classes.caseItemlistItem}>Sales per month: 2</li>
                <li className={classes.caseItemlistItem}>
                  Average bill: $6,400, revenue: 2*$6,400=$12,800 per month
                </li>
              </ul>

              <div className={classes.caseSubItem}>
                <div className={classes.caseSubItemTitle}>With CUCOMM revenue is higher</div>

                <ul className={classes.caseItemlist}>
                  <li className={classes.caseItemlistItem}>
                    SDR send messages per month in total: 11,340
                  </li>
                  <li className={classes.caseItemlistItem}>Sales per month: 4</li>
                  <li className={classes.caseItemlistItem}>
                    Increased revenue: 4*$6,400=$25,600 — increased by 2 times!
                  </li>
                </ul>

                <img className={classes.caseItemImg} src={casesImg} alt="" />
              </div>
            </div>
          </div>
        </CustomContainer>
      </section>
    );
  }
}

const styles = {
  casesSection: {
    paddingTop: '112px',
    paddingBottom: '112px',
    background: 'var(--lightest-grey-color)',
  },
  sign: {
    margin: '0 auto',
    width: '69px',
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
  title: {
    marginTop: '24px',
    fontSize: '48px',
    fontWeight: 500,
    textAlign: 'center',
  },
  caseWrapper: {
    position: 'relative',
    marginTop: '64px',
  },
  caseItem: {
    position: 'relative',
    marginTop: '64px',
    width: '734px',
    flexShrink: 0,
    borderRadius: '24px',
    background: '#ffffff',
    padding: '64px 155px 80px 64px',
  },
  caseItemTitle: {
    fontSize: '48px',
    fontWeight: 500,
  },
  caseItemSubTitle: {
    marginTop: '24px',
    fontSize: '24px',
    fontWeight: 500,
    color: 'var(--main-color)',
  },
  caseItemDescr: {
    marginTop: '24px',
    fontSize: '24px',
    fontWeight: 500,
  },
  caseItemSign: {
    margin: '0',
    marginTop: '40px',
    width: '128px',
    background: 'var(--secondary-color)',
  },
  caseItemlist: {
    marginTop: '24px',
  },
  caseItemlistItem: {
    marginTop: '16px',
    fontSize: '18px',
    fontWeight: 400,
    display: 'flex',
    columnGap: '24px',
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
      flexShrink: 0,
    },
  },
  caseSubItem: {
    position: 'absolute',
    top: '64px',
    left: 'calc(100% - 100px)',
    width: '645px',
    height: '448px',
    flexShrink: 0,
    borderRadius: '24px',
    background: '#ffffff',
    padding: '72px 82px',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.20))',
  },
  caseSubItemTitle: {
    color: 'var(--main-color)',
    fontSize: '24px',
    fontWeight: 500,
  },
  caseItemImg: {
    display: 'block',
    margin: '0 auto',
    marginTop: '64px',
    width: '290px',
    height: '280px',
  },
};

export default withStyles(styles)(CasesSection);
