import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import SpriteIcon from './SpriteIcon';

class TrustpilotStars extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes, barColor, barWidth, starBgColor } = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.star} style={starBgColor ? { backgroundColor: starBgColor } : {}}>
          <SpriteIcon className={classes.starImg} id="icon-trustpilot-star" />
        </div>
        <div className={classes.star}>
          <SpriteIcon className={classes.starImg} id="icon-trustpilot-star" />
        </div>
        <div className={classes.star}>
          <SpriteIcon className={classes.starImg} id="icon-trustpilot-star" />
        </div>
        <div className={classes.star}>
          <SpriteIcon className={classes.starImg} id="icon-trustpilot-star" />
        </div>
        <div className={`${classes.star} ${classes.starLast}`}>
          <SpriteIcon className={classes.starImg} id="icon-trustpilot-star" />
        </div>

        <div
          style={{ backgroundColor: barColor ? barColor : '#707377', width: barWidth }}
          className={classes.bar}></div>
        <div className={classes.barBg}></div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    background: 'transparent',
  },
  star: {
    width: 'calc(100% / 5 - 8)',
    height: '100%',
    position: 'relative',
    zIndex: 3,

    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '2px',
      height: '100%',
      top: 0,
      right: '-2px',
      background: '#ffffff',
    },
  },
  starLast: {
    '&:after': {
      display: 'none',
    },
  },
  starImg: {
    width: 'calc(100% / 5 - 8)',
    height: '100%',
    opacity: 1,
  },
  bar: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    zIndex: '2',
  },
  barBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'rgba(112, 115, 119, 0.1)',
    height: '100%',
    width: '100%',
    zIndex: '1',
  },
};

export default withStyles(styles)(TrustpilotStars);
