import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/styles';
import CustomContainer from './CustomContainer';
import CustomSign from '../ui/CustomSign';
import featureImg1 from './../assets/img/feature-img-1.jpg';
import featureImg2 from './../assets/img/feature-img-2.jpg';

const styles = {
  feature: {
    paddingBottom: '152px',
    paddingTop: '112px',
    backgroundColor: 'var(--text-color)',
  },
  feature__sign: {
    margin: '0 auto',
  },
  feature__title: {
    marginTop: '24px',
    color: '#ffffff',
    fontWeight: 500,
    fontSize: '48px',
    lineHeight: '56px',
    textAlign: 'center',
  },
  feature__descr: {
    marginTop: '16px',
    color: '#ffffff',
    fontWeight: 300,
    fontSize: '24px',
    lineHeight: '32px',
    textAlign: 'center',
  },
  feature__img: {
    position: 'absolute',
    width: '188px',
    height: '188px',
    borderRadius: '24px',
  },
  feature__img_1: {
    left: 0,
    top: '-160px',
  },
  feature__img_2: {
    right: 0,
    bottom: '-104px',
  },
};

// const StyledKillerFeatureSection = styled.section`
//   .feature {
//     padding-bottom: 152px;
//     padding-top: 112px;
//     background-color: var(--text-color);
//   }

//   .feature__sign {
//     margin: 0 auto;
//   }

//   .feature__title {
//     margin-top: 24px;
//     color: #ffffff;
//     font-weight: 500;
//     font-size: 48px;
//     line-height: 56px;
//     text-align: center;
//   }

//   .feature__descr {
//     margin-top: 16px;
//     color: #ffffff;
//     font-weight: 300;
//     font-size: 24px;
//     line-height: 32px;
//     text-align: center;
//   }

//   .feature__img {
//     position: absolute;
//     width: 188px;
//     height: 188px;
//     border-radius: 24px;
//   }

//   .feature__img_1 {
//     left: 0;
//     top: -160px;
//   }

//   .feature__img_2 {
//     right: 0;
//     bottom: -104px;
//   }
// `;

class KillerFeatureSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.feature}>
        <CustomContainer>
          <CustomSign className={classes.feature__sign} width="131px">
            KILLER FEATURE
          </CustomSign>

          <h2 className={classes.feature__title}>Common inbox</h2>
          <div className={classes.feature__descr}>
            One inbox for all your Facebook accounts
          </div>

          <img
            src={featureImg1}
            alt="man-with-glasses"
            className={`${classes.feature__img} ${classes.feature__img_1}`}
          />
          <img
            src={featureImg2}
            alt="woman-with-glasses"
            className={`${classes.feature__img} ${classes.feature__img_2}`}
          />
        </CustomContainer>
      </section>
    );
  }
}

export default withStyles(styles)(KillerFeatureSection);
