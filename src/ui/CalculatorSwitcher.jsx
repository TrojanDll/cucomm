import { withStyles } from '@material-ui/styles';
import React from 'react';
import chevron from './../assets/img/chevron.svg';

class CalculatorSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switcherFirstPosition: true,
    };
  }
  render() {
    const { switcherFirstPosition } = this.state;
    const { classes, isSmall, toggleIsFirstPage, firstParameter, secondParameter } = this.props;

    const toggleSwitcher = (e) => {
      e.preventDefault();
      this.setState({
        switcherFirstPosition: !switcherFirstPosition,
      });
      if (isSmall == false) {
        toggleIsFirstPage();
      }
    };

    return window.innerWidth >= 576 ? (
      <button onClick={(e) => toggleSwitcher(e)}>
        <div className={`${classes.switcher} ${isSmall ? classes.switcher_small : ''}`}>
          <div
            className={`${classes.switcher__element} ${
              switcherFirstPosition ? classes.switcher__element_active : ''
            } ${isSmall ? classes.switcher__element_small : ''}`}>
            {firstParameter}
          </div>
          <div
            className={`${classes.switcher__element} ${
              switcherFirstPosition ? '' : classes.switcher__element_active
            } ${isSmall ? classes.switcher__element_small : ''}`}>
            {secondParameter}
          </div>
        </div>
      </button>
    ) : (
      <button
        onClick={(e) => toggleSwitcher(e)}
        className={`${classes.mobileSwitcher} ${
          switcherFirstPosition ? '' : classes.mobileSwitcherChanged
        } ${isSmall ? classes.switcherSmallMobile : ''}`}>
        {switcherFirstPosition ? firstParameter : secondParameter}
      </button>
    );
  }
}

const styles = {
  switcher: {
    padding: '3px',
    width: '324px',
    height: '56px',
    borderRadius: '30px',
    border: '1px solid #B4B9BF',
    display: 'flex',
  },
  switcher_small: {
    width: '298px',
    height: '48px',
  },
  switcher__element: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '158px',
    height: '48px',
    borderRadius: '100px',
    background: 'transparent',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '24px',
    opacity: '0.5',
    color: 'var(--text-color)',
  },
  switcher__element_small: {
    width: '143px',
    height: '40px',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '20px',
  },
  switcher__element_active: {
    background: 'var(--grey-color)',
    opacity: '1',
    color: '#ffffff',
  },
  mobileSwitcher: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 24px',
    width: '100%',
    height: '56px',
    border: '1px solid var(--light-grey-color)',
    borderRadius: '9999px',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 500,
    '&::after': {
      content: '""',
      display: 'block',
      width: '16px',
      height: '8px',
      flexShrink: 0,
      transform: 'rotate(0)',
      transition: 'all 0.2s',
      background: `url("${chevron}") center center/cover no-repeat`,
    },
  },
  switcherSmallMobile: {
    height: '48px',
    fontSize: '14px',
    lineHeight: '20px',
  },
  mobileSwitcherChanged: {
    '&::after': {
      transform: 'rotate(180deg)',
    },
  },
};

export default withStyles(styles)(CalculatorSwitcher);
