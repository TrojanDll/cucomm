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
        <div className={`${classes.switcher} ${isSmall ? classes.switcherSmall : ''}`}>
          <div
            className={`${classes.element} ${switcherFirstPosition ? classes.elementActive : ''} ${
              isSmall ? classes.elementSmall : ''
            }`}>
            {firstParameter}
          </div>
          <div
            className={`${classes.element} ${switcherFirstPosition ? '' : classes.elementActive} ${
              isSmall ? classes.elementSmall : ''
            }`}>
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
    paddingLeft: '4px',
    paddingRight: '4px',
    width: '325px',
    height: '56px',
    borderRadius: '30px',
    border: '1px solid #B4B9BF',
    display: 'flex',
    justifyContent: 'space-between',
  },
  switcherSmall: {
    marginTop: '8px',
    width: '298px',
    height: '48px',
    flexShrink: 0,
  },
  element: {
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
    flexShrink: 0,
  },
  elementSmall: {
    width: '143px',
    height: '40px',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '20px',
  },
  elementActive: {
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
    marginTop: '8px',
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
