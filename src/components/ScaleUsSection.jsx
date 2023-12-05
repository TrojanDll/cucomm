import React from 'react';
import styled from 'styled-components';
import scaleImg from './../assets/img/scale-us.png';
import listPoint from './../assets/img/icons/list-point.svg';
import CustomContainer from './CustomContainer';
import CustomButton from '../ui/CustomButton';
import CustomSign from '../ui/CustomSign';
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
      background: 'url(${listPoint}) center center/cover no-repeat',
    },
  },
  scale__buttons: {
    marginTop: '40px',
    display: 'flex',
    columnGap: '16px',
  },
};

// const StyledScaleUsSection = styled.section`
//   .scale {
//     background-color: var(--lightest-grey-color);
//     padding-top: 170px;
//   }

//   .scaleWrapper {
//     display: flex;
//     justify-content: space-between;
//   }

//   .scale__textWrapper {
//     max-width: 625px;
//   }

//   .scale__title {
//     margin-top: 24px;
//     font-size: 48px;
//     font-weight: 500;
//     line-height: 56px;
//   }

//   .scale__list {
//     margin-top: 40px;
//   }

//   .scale__listItem {
//     margin-top: 16px;
//     display: flex;
//     column-gap: 24px;
//     font-size: 18px;
//     line-height: 24px;
//     font-weight: 400;
//   }

//   .scale__listItem:first-child {
//     margin-top: 0;
//   }

//   .scale__listItem::before {
//     content: '';
//     display: block;
//     margin-top: 8px;
//     width: 8px;
//     height: 9px;
//     background: url(${listPoint}) center center/cover no-repeat;
//   }

//   .scale__buttons {
//     margin-top: 40px;
//     display: flex;
//     column-gap: 16px;
//   }
// `;

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
              <CustomSign className={classes.scale__sign} width="90px">
                SOLUTION
              </CustomSign>

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
                <CustomButton
                  primary="true"
                  fixedSize
                  width="166px"
                  height="64px"
                  fontSize="18px"
                  className={classes.scale__button}
                >
                  Try now
                </CustomButton>
                <CustomButton
                  outlined="true"
                  fixedSize
                  width="166px"
                  height="64px"
                  fontSize="18px"
                  className={classes.scale__button}
                >
                  Book a demo
                </CustomButton>
              </div>
            </div>
          </div>
        </CustomContainer>
      </section>
    );
  }
}
export default withStyles(styles)(ScaleUsSection);
