import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import SpriteIcon from './SpriteIcon';

class CustomCloud extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes, text, tailLeft } = this.props;

    return (
      <div className={classes.cloud}>
        {text}
        <SpriteIcon
          id="icon-cloud-tail"
          className={`${classes.tail} ${tailLeft ? classes.tailLeft : ''}`}
        />
      </div>
    );
  }
}

const styles = {
  cloud: {
    position: 'relative',
    display: 'inline-block',
    padding: '8px 16px',
    background: 'var(--semi-grey-color)',
    borderRadius: '9999px',
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  tail: {
    position: 'absolute',
    bottom: 0,
    right: '16px',
    width: '16px',
    height: '9px',
    transform: 'translateY(80%)',
  },
  tailLeft: {
    right: 'auto',
    left: '16px',
    transform: 'translateY(80%) scale(-1, 1)',
  },

  '@media (max-width: 576px)': {
    cloud: {
      padding: '4px 10px',
      fontSize: '10px',
      lineHeight: '14px',
    },
    tail: {
      width: '10px',
      height: '6px',
      right: '10px',
    },
  },
};

export default withStyles(styles)(CustomCloud);
