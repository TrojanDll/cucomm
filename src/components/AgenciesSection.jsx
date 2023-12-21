import React from 'react';
import { withStyles } from '@material-ui/styles';
import CustomContainer from './CustomContainer';
import heartImg from './../assets/img/heart.png';
import agenciesImgCommon from './../assets/img/agencies-img-1.png';
import agenciesImgProfile from './../assets/img/agencies-img-2.png';
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
          <div className={`${classes.img} ${classes.imgCommon}`}>
            <img
              src={agenciesImgCommon}
              alt="agenciesImgCommon"
              className={`${classes.imgContent}`}
            />

            <div className={classes.imgTextWrapper}>
              <div className={classes.imgTextItem}>PROFILES</div>
              <div className={`${classes.imgTextItem} ${classes.imgTextItemActive}`}>
                COMMON INBOX
              </div>
              <div className={classes.imgTextItem}>STATISTICS</div>
              <div className={classes.imgTextItem}>FUNNEL</div>
              <div className={classes.imgTextItem}>MESSAGE SCRIPT</div>
              <div className={classes.imgTextItem}>USER</div>
            </div>
          </div>

          <div className={`${classes.img} ${classes.imgProfile}`}>
            <img src={agenciesImgProfile} alt="agenciesImg2" className={classes.imgContent} />

            <div className={classes.imgTextWrapperProfiles}>
              <div className={`${classes.imgTextItem} ${classes.imgTextItemActive}`}>PROFILES</div>
              <div className={classes.imgTextItem}>COMMON INBOX</div>
              <div className={classes.imgTextItem}>STATISTICS</div>
              <div className={classes.imgTextItem}>FUNNEL</div>
              <div className={classes.imgTextItem}>MESSAGE SCRIPT</div>
              <div className={classes.imgTextItem}>USER</div>
            </div>
          </div>

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
    boxShadow: '0px 20px 60px rgba(0, 48, 71, 0.2)',
    borderRadius: '24px',
  },
  imgCommon: {
    top: '-638px',
    left: 0,
    width: '843px',
    height: '436px',
  },
  imgProfile: {
    top: '-462px',
    right: 0,
    width: '625px',
    height: '350px',
  },
  imgTextWrapper: {
    position: 'absolute',
    top: '73px',
    left: '32px',
  },
  imgTextWrapperProfiles: {
    position: 'absolute',
    top: '80px',
    left: '26px',
  },
  imgTextItem: {
    marginTop: '8px',
    color: 'var(--grey-color)',
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '20px',
    opacity: '0.5',
    '&:first-child': {
      marginTop: 0,
    },
  },
  imgTextItemActive: {
    opacity: 1,
  },
  imgContent: {
    width: '100%',
    height: '100%',
    borderRadius: '24px',
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
    imgCommon: {
      width: '675px',
      height: '348px',
      borderRadius: '16px',
    },
    imgProfile: {
      width: '500px',
      height: '280px',
      borderRadius: '16px',
    },
    imgTextWrapper: {
      position: 'absolute',
      top: '53px',
      left: '22px',
    },
    imgTextWrapperProfiles: {
      top: '64px',
      left: '23px',
    },
    imgTextItem: {
      fontSize: '10px',
      lineHeight: '18px',
    },
    imgContent: {
      width: '100%',
      height: '100%',
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
    imgProfile: {
      display: 'none',
    },
    imgCommon: {
      top: '-470px',
      width: '100%',
      height: 'auto',
    },
    imgMan: {
      display: 'none',
    },
    imgTextWrapper: {
      top: '59px',
      left: '22px',
    },
  },

  '@media (max-width: 768px)': {
    agencies: {
      paddingTop: '250px',
    },
    imgCommon: {
      top: '-350px',
    },
    listItem: {
      width: 'calc(50% - 20px)',
      '&::after': {
        display: 'none',
      },
    },
    imgTextItem: {
      marginTop: '0',
      fontSize: '8px',
      lineHeight: '16px',
    },
    imgTextWrapper: {
      position: 'absolute',
      top: '47px',
      left: '19px',
    },
  },

  '@media (max-width: 576px)': {
    agencies: {
      paddingTop: '110px',
      paddingBottom: '64px',
    },
    imgCommon: {
      borderRadius: '8px',
      width: '315px',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '-200px',
      boxShadow: '0px 7.477px 22.431px rgba(0, 48, 71, 0.20)',
    },
    imgTextItem: {
      marginTop: '3px',
      fontSize: '5px',
      lineHeight: '8px',
    },
    imgTextWrapper: {
      top: '26px',
      left: '9px',
    },
    imgContent: {
      width: '100%',
      height: '100%',
      borderRadius: '8px',
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
