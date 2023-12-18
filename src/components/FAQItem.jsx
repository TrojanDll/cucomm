import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import SpriteIcon from '../ui/SpriteIcon';

class FAQItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDescrOpened: this.props.setDescrOpened,
    };

    this.descrRef = React.createRef();
  }

  componentDidUpdate() {
    const descr = this.descrRef.current;

    if (this.state.isDescrOpened) {
      descr.style.maxHeight = descr.scrollHeight + 'px';
    } else {
      descr.style.maxHeight = null;
    }
  }

  render() {
    const { classes, title, descr } = this.props;
    const { isDescrOpened } = this.state;

    const toggleIsDescrOpened = () => {
      this.setState({ isDescrOpened: !isDescrOpened });
    };

    return (
      <div className={classes.faqItem}>
        <div className={classes.header} onClick={toggleIsDescrOpened}>
          <div className={`${classes.title} ${isDescrOpened ? classes.titleActive : ''}`}>
            {title}
          </div>
          <SpriteIcon
            id="icon-chevron"
            className={`${classes.chevron} ${isDescrOpened ? classes.chevronActive : ''}`}
          />
        </div>

        <div
          ref={this.descrRef}
          className={`${classes.descr} ${isDescrOpened ? classes.descrActive : ''}`}>
          {descr}
        </div>
      </div>
    );
  }
}

const styles = {
  faqItem: {
    borderBottom: '1px solid var(--light-grey-color)',
    boxSizing: 'content-box',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: '32px 0',
    '&:hover': {
      color: 'var(--main-color)',
    },
  },
  title: {
    fontSize: '24px',
    fontWeight: 500,
    pointerEvent: 'none',
  },
  titleActive: {
    color: 'var(--main-color)',
  },
  chevron: {
    width: '28px',
    height: '14px',
    flexShrink: 0,
    transform: 'rotate(0)',
    transition: 'all 0.2s',
    pointerEvent: 'none',
  },
  chevronActive: {
    transform: 'rotate(180deg)',
  },
  descr: {
    overflow: 'hidden',
    height: 'auto',
    maxHeight: 0,
    willChange: 'maxHeight',
    fontSize: '18px',
    fontWeight: 400,
    paddingBottom: '0',
    boxSizing: 'content-box',
    transition: 'all 0.3s ease-out',
  },
  descrActive: {
    paddingBottom: '32px',
  },

  '@media (max-width: 576px)': {
    header: {
      padding: '24px 0',
    },
    title: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    descrActive: {
      paddingBottom: '24px',
    },
    chevron: {
      marginTop: '11px',
      width: '16px',
      height: '8px',
    },
  },
};

export default withStyles(styles)(FAQItem);
