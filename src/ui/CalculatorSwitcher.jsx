import { withStyles } from '@material-ui/styles';
import React from 'react';

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
};

class CalculatorSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switcherFirstPosition: true,
    };
  }
  render() {
    const { switcherFirstPosition } = this.state;
    const { classes, isSmall, toggleIsFirstPage } = this.props;

    const toggleSwitcher = (e) => {
      e.preventDefault();
      this.setState({
        switcherFirstPosition: !switcherFirstPosition,
      });
      if (isSmall == false) {
        toggleIsFirstPage();
      }
    };

    return (
      <button onClick={(e) => toggleSwitcher(e)}>
        <div className={`${classes.switcher} ${isSmall ? classes.switcher_small : ''}`}>
          <div
            className={`${classes.switcher__element} ${
              switcherFirstPosition ? classes.switcher__element_active : ''
            } ${isSmall ? classes.switcher__element_small : ''}`}>
            {this.props.firstParameter}
          </div>
          <div
            className={`${classes.switcher__element} ${
              switcherFirstPosition ? '' : classes.switcher__element_active
            } ${isSmall ? classes.switcher__element_small : ''}`}>
            {this.props.secondParameter}
          </div>
        </div>
      </button>
    );
  }
}
export default withStyles(styles)(CalculatorSwitcher);
