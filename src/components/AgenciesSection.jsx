import React from 'react';
import { withStyles } from '@material-ui/styles';
import CustomContainer from './CustomContainer';
import heartImg from './../assets/img/heart.png';
import agenciesImg1 from './../assets/img/agencies-img-1.png';
import agenciesImg2 from './../assets/img/agencies-img-2.png';
import agenciesImgMan from './../assets/img/agencies-man-img.jpg';
import SpriteIcon from '../ui/SpriteIcon';

class AgenciesSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.agencies}>
        <CustomContainer>
          <img src={agenciesImg1} alt="agenciesImg1" className={`${classes.img} ${classes.img1}`} />
          <img src={agenciesImg2} alt="agenciesImg2" className={`${classes.img} ${classes.img2}`} />
          <img src={agenciesImgMan} alt="agenciesImg2" className={classes.imgMan} />

          <h2 className={classes.title}>
            Built with <img src={heartImg} alt="heart" /> for Marketing Agencies
          </h2>
          <div className={classes.descr}>And anyone looking for high-ticket clients</div>

          <div className={classes.list}>
            <div className={classes.listItem}>
              <SpriteIcon id="icon-targeting-1" className={classes.listItemImg} />
              <div className={classes.listItemDescr}>
                Target by demographics <br /> and location
              </div>
            </div>

            <div className={classes.listItem}>
              <SpriteIcon id="icon-targeting-2" className={classes.listItemImg} />
              <div className={classes.listItemDescr}>Target by Job-title (+negative keywords)</div>
            </div>

            <div className={classes.listItem}>
              <SpriteIcon id="icon-targeting-3" className={classes.listItemImg} />
              <div className={classes.listItemDescr}>Target by Industry and Interest</div>
            </div>

            <div className={classes.listItem}>
              <SpriteIcon id="icon-targeting-4" className={classes.listItemImg} />
              <div className={classes.listItemDescr}>
                And more! <br /> Lorem ipsum dolor set
              </div>
            </div>
          </div>
        </CustomContainer>
      </section>
    );
  }
}

const styles = {
  agencies: {
    paddingTop: '550px',
    paddingBottom: '112px',
  },

  img: {
    position: 'absolute',
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.2))',
    borderRadius: '24px',
  },
  img1: {
    top: '-638px',
    left: 0,
    width: '843px',
    height: '436px',
  },
  img2: {
    top: '-462px',
    right: 0,
    width: '625px',
    height: '350px',
  },
  imgMan: {
    position: 'absolute',
    width: '188px',
    height: '188px',
    borderRadius: '24px',
    left: '109px',
    top: '-242px',
  },
  title: {
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: '48px',
    textAlign: 'center',
    '& img': {
      marginTop: '6px',
      height: '34px',
    },
  },
  descr: {
    marginTop: '16px',
    fontSize: '24px',
    textAlign: 'center',
    fontWeight: 300,
    lineHeight: '32px',
  },
  list: {
    marginTop: '44px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  listItem: {
    position: 'relative',
    width: '298px',
    '&::after': {
      content: '""',
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
  listItemImg: {
    width: '120px',
    height: '112px',
  },
  listItemDescr: {
    marginTop: '8px',
    fontSize: '24px',
    fontWeight: 300,
    lineHeight: '32px',
  },

  '@media (max-width: 1320px)': {
    img1: {
      width: '675px',
      height: '348px',
      borderRadius: '16px',
    },
    img2: {
      width: '500px',
      height: '280px',
      borderRadius: '16px',
    },
    list: {
      flexWrap: 'wrap',
      rowGap: '48px',
    },
    listItem: {
      width: 'calc(50% - 32px)',
      '&:nth-child(even)::after': {
        display: 'none',
      },
      '&::after': {
        right: '-32px',
      },
    },
    listItemImg: {
      display: 'block',
      margin: '0 auto',
    },
    listItemDescr: {
      textAlign: 'center',
    },
  },

  '@media (max-width: 992px)': {
    agencies: {
      paddingTop: '380px',
    },
    img2: {
      display: 'none',
    },
    img1: {
      top: '-470px',
      width: '100%',
      height: 'auto',
    },
    imgMan: {
      display: 'none',
    },
  },

  '@media (max-width: 768px)': {
    agencies: {
      paddingTop: '250px',
    },
    img1: {
      top: '-350px',
    },
    listItem: {
      width: 'calc(50% - 20px)',
      '&::after': {
        display: 'none',
      },
    },
  },

  '@media (max-width: 576px)': {
    agencies: {
      paddingTop: '110px',
      paddingBottom: '64px',
    },
    img1: {
      borderRadius: '8px',
      width: '315px',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '-200px',
      filter: 'drop-shadow(0px 7.477px 22.431px rgba(0, 48, 71, 0.20))',
    },
    title: {
      fontSize: '32px',
      lineHeight: '40px',
    },
    descr: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    listItem: {
      width: '100%',
    },
    listItemDescr: {
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
};

export default withStyles(styles)(AgenciesSection);
