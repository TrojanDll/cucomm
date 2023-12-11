import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import CustomContainer from './CustomContainer';
import SpriteIcon from '../ui/SpriteIcon';
import funnel from './../assets/img/funnel.png';
import statistics from './../assets/img/statistics.png';

class FunctionalSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.functional}>
        <CustomContainer>
          <div className={classes.item}>
            <div className={classes.itemTextWrapper}>
              <SpriteIcon className={classes.itemImg} id="icon-deatiled-statistics" />
              <div className={classes.itemText}>Detailed in-depth statistics</div>
            </div>

            <img className={classes.img} src={statistics} alt="" />
          </div>

          <div className={classes.item}>
            <img className={`${classes.img} ${classes.imgLeftSide}`} src={funnel} alt="" />

            <div className={classes.itemTextWrapper}>
              <SpriteIcon className={classes.itemImg} id="icon-crm" />
              <div className={classes.itemText}>
                CRM to track your <br /> leads
              </div>
            </div>
          </div>

          <div className={classes.item}>
            <div className={classes.itemTextWrapper}>
              <SpriteIcon className={classes.itemImg} id="icon-parsing" />
              <div className={classes.itemText}>Parse from anywhere of the Facebook!</div>
            </div>

            <div className={`${classes.img} ${classes.list}`}>
              <div className={classes.listItem}>
                <SpriteIcon id="icon-groups" className={classes.listItemImg} />
                <div className={classes.listItemText}>Groups</div>
              </div>

              <div className={classes.listItem}>
                <SpriteIcon id="icon-friend-list" className={classes.listItemImg} />
                <div className={classes.listItemText}>Friend Lists</div>
              </div>

              <div className={classes.listItem}>
                <SpriteIcon id="icon-money-flower" className={classes.listItemImg} />
                <div className={classes.listItemText}>Business Pages</div>
              </div>

              <div className={classes.listItem}>
                <SpriteIcon id="icon-lens-people" className={classes.listItemImg} />
                <div className={classes.listItemText}>People from search</div>
              </div>

              <div className={classes.listItem}>
                <SpriteIcon id="icon-lens-money" className={classes.listItemImg} />
                <div className={classes.listItemText}>Business Pages from search</div>
              </div>

              <div className={classes.listItem}>
                <SpriteIcon id="icon-marketplaces" className={classes.listItemImg} />
                <div className={classes.listItemText}>Marketplaces</div>
              </div>
            </div>
          </div>
        </CustomContainer>
      </section>
    );
  }
}

const styles = {
  functional: {
    paddingTop: '115px',
    paddingBottom: '80px',
  },
  item: {
    position: 'relative',
    '&:nth-child(2)': {
      marginTop: '268px',
      display: 'flex',
      justifyContent: 'end',
    },
    '&:nth-child(3)': {
      marginTop: '107px',
    },
  },
  itemTextWrapper: {
    width: '407px',
  },
  itemImg: {
    width: '160px',
    height: '155px',
    flexShrink: 0,
  },
  itemText: {
    fontSize: '40px',
    fontWeight: 300,
    marginTop: '16px',
  },
  img: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '843px',
    height: '436px',
    flexShrink: 0,
    filter: 'drop-shadow(0px 20px 60px rgba(0, 48, 71, 0.20))',
    borderRadius: '24px',
    zIndex: 2,
  },
  imgLeftSide: {
    top: 'auto',
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  list: {
    padding: '64px 110px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: '48px',
    background: '#ffffff',
  },
  listItem: {
    width: '188px',
  },
  listItemImg: {
    display: 'block',
    width: '80px',
    height: '80px',
    margin: '0 auto',
  },
  listItemText: {
    fontSize: '18px',
    fontWeight: 400,
    marginTop: '16px',
    textAlign: 'center',
  },

  '@media (max-width: 1320px)': {
    functional: {
      paddingBottom: '0',
      minHeight: '2330px',
    },
    item: {
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: 0,
      '&:nth-child(2)': {
        marginTop: '72px',
      },
      '&:nth-child(3)': {
        marginTop: '72px',
      },
    },
    itemTextWrapper: {
      order: 1,
    },
    itemTextWrapper: {
      width: '100%',
      textAlign: 'center',
    },
    img: {
      position: 'static',
      display: 'block',
      margin: '0 auto',
      marginTop: '36px',
      order: 2,
    },
    list: {
      display: 'flex',
      position: 'absolute',
      left: 0,
      marginTop: '0px',
      top: '250px',
      // transform: 'translateY(72px)',
    },
  },

  '@media (max-width: 992px)': {
    functional: {
      minHeight: '2380px',
    },
    img: {
      width: '100%',
      height: 'auto',
    },
    list: {
      top: '265px',
    },
  },

  '@media (max-width: 768px)': {
    functional: {
      minHeight: '2200px',
    },
    list: {
      top: '300px',
      padding: '40px 20px',
      justifyContent: 'space-around',
    },
  },

  '@media (max-width: 576px)': {
    functional: {
      paddingTop: '64px',
      minHeight: '1800px',
    },
    img: {
      borderRadius: '12px',
      width: '315px',
    },
    itemText: {
      fontSize: '32px',
      lineHeight: '40px',
    },
    listItem: {
      width: 'calc(50% - 16px)',
    },
    list: {
      justifyContent: 'space-between',
      zIndex: 999,
    },
    item: {
      '&:nth-child(2)': {
        marginTop: '40px',
      },
      '&:nth-child(3)': {
        marginTop: '40px',
      },
    },
  },

  '@media (max-width: 434px)': {
    functional: {
      minHeight: '1832px',
    },
  },
};

export default withStyles(styles)(FunctionalSection);
