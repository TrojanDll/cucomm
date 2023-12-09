import React from 'react';
import CustomContainer from './CustomContainer';
import listPoint from './../assets/img/listPoint.svg';
import { withStyles } from '@material-ui/styles';

const styles = {
  product: {
    paddingTop: '112px',
    paddingBottom: '113px',
    backgroundColor: 'var(--lightest-grey-color)',
  },
  product__sign: {
    margin: '0 auto',
    width: '85px',
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
  product__title: {
    marginTop: '24px',
    fontSize: '48px',
    fontWeight: 500,
    lineHeight: '56px',
    textAlign: 'center',
  },
  product__listWrapper: {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  product__listItem: {
    marginTop: '16px',
    display: 'flex',
    columnGap: '24px',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
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
  product__btn: {
    margin: '0 auto',
    marginTop: '60px',
    width: '406px',
    height: '64px',
    fontSize: '18px',
    fontWeight: '600',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '24px',
    background: 'var(--main-color)',
    borderRadius: '9999px',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      background: 'var(--hover-color)',
    },
  },
};

class ProductSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.product}>
        <CustomContainer>
          <div className={classes.product__sign}>PRODUCT</div>

          <div className={classes.product__title}>Better than competitors</div>

          <div className={classes.product__listWrapper}>
            <ul className={classes.product__list}>
              <li className={classes.product__listItem}>
                Scaling: Need more leads? Just add FB accounts!
              </li>
              <li className={classes.product__listItem}>Trusted accounts in place</li>
              <li className={classes.product__listItem}>
                No need to split profiles for each account — use the same collection
              </li>
              <li className={classes.product__listItem}>Split-test outbound messages</li>
              <li className={classes.product__listItem}>Split-test appearance of accounts</li>
              <li className={classes.product__listItem}>CRM in place</li>
            </ul>

            <ul className={classes.product__list}>
              <li className={classes.product__listItem}>Follow-up sequences</li>
              <li className={classes.product__listItem}>
                Free safe built-in anti-detect multi-account browser
              </li>
              <li className={classes.product__listItem}>
                Detailed statistics for each day/account (sent, delivered, booked)
              </li>
              <li className={classes.product__listItem}>Core auto-updates</li>
              <li className={classes.product__listItem}>On-boarding session</li>
              <li className={classes.product__listItem}>
                Live-chat, email, and phone support, remote support
              </li>
            </ul>
          </div>

          <button className={classes.product__btn}>I Want It!</button>
        </CustomContainer>
      </section>
    );
  }
}

export default withStyles(styles)(ProductSection);
