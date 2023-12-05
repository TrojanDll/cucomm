import React from 'react';
import { withStyles } from '@material-ui/styles';
import CustomContainer from './CustomContainer';
import heartImg from './../assets/img/heart.png';
import agenciesImg1 from './../assets/img/agencies-img-1.png';
import agenciesImg2 from './../assets/img/agencies-img-2.png';
import agenciesImgMan from './../assets/img/agencies-man-img.jpg';
import SpriteIcon from '../ui/SpriteIcon';

const styles = {
  agencies: {
    paddingTop: '550px',
    paddingBottom: '112px',
  },

  agencies__img: {
    position: 'absolute',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.2))',
    borderRadius: '24px',
  },
  agencies__img_1: {
    top: '-638px',
    left: 0,
    width: '843px',
    height: '436px',
  },
  agencies__img_2: {
    top: '-462px',
    right: 0,
    width: '625px',
    height: '350px',
  },
  agencies__img_man: {
    position: 'absolute',
    width: '188px',
    height: '188px',
    borderRadius: '24px',
    left: '109px',
    top: '-242px',
  },
  agencies__title: {
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: '48px',
    textAlign: 'center',
    '& img': {
      marginTop: '6px',
      height: '34px',
    },
  },
  agencies__descr: {
    marginTop: '16px',
    fontSize: '24px',
    textAlign: 'center',
    fontWeight: 300,
    lineHeight: '32px',
  },
  agencies__list: {
    marginTop: '44px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  agencies__list_item: {
    position: 'relative',
    width: '298px',
    '&::after': {
      content: '""', // Добавлен контент
      position: 'absolute',
      right: 0,
      bottom: 0,
      display: 'block',
      width: '1px',
      height: '168px',
      background: 'var(--light-grey-color)',
    },
    '&:last-child::after': {
      display: 'none',
    },
  },
  agencies__list_item__img: {
    width: '120px',
    height: '112px',
  },
  agencies__list_item__descr: {
    marginTop: '8px',
    fontSize: '24px',
    fontWeight: 300,
    lineHeight: '32px',
  },
};

class AgenciesSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.agencies}>
        <CustomContainer>
          <img
            src={agenciesImg1}
            alt="agenciesImg1"
            className={`${classes.agencies__img} ${classes.agencies__img_1}`}
          />
          <img
            src={agenciesImg2}
            alt="agenciesImg2"
            className={`${classes.agencies__img} ${classes.agencies__img_2}`}
          />
          <img
            src={agenciesImgMan}
            alt="agenciesImg2"
            className={classes.agencies__img_man}
          />

          <h2 className={classes.agencies__title}>
            Built with <img src={heartImg} alt="heart" /> for Marketing Agencies
          </h2>
          <div className={classes.agencies__descr}>
            And anyone looking for high-ticket clients
          </div>

          <div className={classes.agencies__list}>
            <div className={classes.agencies__list_item}>
              <SpriteIcon
                id="icon-targeting-1"
                className={classes.agencies__list_item__img}
              />
              <div className={classes.agencies__list_item__descr}>
                Target by demographics <br /> and location
              </div>
            </div>

            <div className={classes.agencies__list_item}>
              <SpriteIcon
                id="icon-targeting-2"
                className={classes.agencies__list_item__img}
              />
              <div className={classes.agencies__list_item__descr}>
                Target by Job-title (+negative keywords)
              </div>
            </div>

            <div className={classes.agencies__list_item}>
              <SpriteIcon
                id="icon-targeting-3"
                className={classes.agencies__list_item__img}
              />
              <div className={classes.agencies__list_item__descr}>
                Target by Industry and Interest
              </div>
            </div>

            <div className={classes.agencies__list_item}>
              <SpriteIcon
                id="icon-targeting-4"
                className={classes.agencies__list_item__img}
              />
              <div className={classes.agencies__list_item__descr}>
                And more! <br /> Lorem ipsum dolor set
              </div>
            </div>
          </div>
        </CustomContainer>
      </section>
    );
  }
}

export default withStyles(styles)(AgenciesSection);
