import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import CustomContainer from './CustomContainer';
import SpriteIcon from '../ui/SpriteIcon';
import funnel from './../assets/img/funnel.png';
import statistics from './../assets/img/statistics.png';

const styles = {
  functional: {
    paddingTop: '115px',
    paddingBottom: '80px',
  },
  functional__item: {
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
  functional__itemTextWrapper: {
    width: '407px',
  },
  functional__itemImg: {
    width: '160px',
    height: '155px',
    flexShrink: 0,
  },
  functional__itemText: {
    fontSize: '40px',
    fontWeight: 300,
    marginTop: '16px',
  },
  functional__img: {
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
  functional__img_leftSide: {
    top: 'auto',
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  functional__list: {
    padding: '64px 110px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: '48px',
    background: '#ffffff',
  },
  functional__list__item: {
    width: '188px',
  },
  functional__list__itemImg: {
    display: 'block',
    width: '80px',
    height: '80px',
    margin: '0 auto',
  },
  functional__list__itemText: {
    fontSize: '18px',
    fontWeight: 400,
    marginTop: '16px',
    textAlign: 'center',
  },
};

class FunctionalSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.functional}>
        <CustomContainer>
          <div className={classes.functional__item}>
            <div className={classes.functional__itemTextWrapper}>
              <SpriteIcon className={classes.functional__itemImg} id="icon-deatiled-statistics" />
              <div className={classes.functional__itemText}>Detailed in-depth statistics</div>
            </div>

            <img className={classes.functional__img} src={statistics} alt="" />
          </div>

          <div className={classes.functional__item}>
            <img
              className={`${classes.functional__img} ${classes.functional__img_leftSide}`}
              src={funnel}
              alt=""
            />

            <div className={classes.functional__itemTextWrapper}>
              <SpriteIcon className={classes.functional__itemImg} id="icon-crm" />
              <div className={classes.functional__itemText}>
                CRM to track your <br /> leads
              </div>
            </div>
          </div>

          <div className={classes.functional__item}>
            <div className={classes.functional__itemTextWrapper}>
              <SpriteIcon className={classes.functional__itemImg} id="icon-parsing" />
              <div className={classes.functional__itemText}>
                Parse from anywhere of the Facebook!
              </div>
            </div>

            <div className={`${classes.functional__img} ${classes.functional__list}`}>
              <div className={classes.functional__list__item}>
                <SpriteIcon id="icon-groups" className={classes.functional__list__itemImg} />
                <div className={classes.functional__list__itemText}>Groups</div>
              </div>

              <div className={classes.functional__list__item}>
                <SpriteIcon id="icon-friend-list" className={classes.functional__list__itemImg} />
                <div className={classes.functional__list__itemText}>Friend Lists</div>
              </div>

              <div className={classes.functional__list__item}>
                <SpriteIcon id="icon-money-flower" className={classes.functional__list__itemImg} />
                <div className={classes.functional__list__itemText}>Business Pages</div>
              </div>

              <div className={classes.functional__list__item}>
                <SpriteIcon id="icon-lens-people" className={classes.functional__list__itemImg} />
                <div className={classes.functional__list__itemText}>People from search</div>
              </div>

              <div className={classes.functional__list__item}>
                <SpriteIcon id="icon-lens-money" className={classes.functional__list__itemImg} />
                <div className={classes.functional__list__itemText}>Business Pages from search</div>
              </div>

              <div className={classes.functional__list__item}>
                <SpriteIcon id="icon-marketplaces" className={classes.functional__list__itemImg} />
                <div className={classes.functional__list__itemText}>Marketplaces</div>
              </div>
            </div>
          </div>
        </CustomContainer>
      </section>
    );
  }
}

export default withStyles(styles)(FunctionalSection);