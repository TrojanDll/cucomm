import { withStyles } from '@material-ui/styles';
import React from 'react';

class CustomInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    const { title, placeholder, withDollar } = this.props;

    return (
      <div className={classes.inputWrapper}>
        <div className={classes.title}>{title}</div>
        <div
          className={`${classes.inputWrapper} ${withDollar ? classes.inputWithDollarWrapper : ''}`}>
          <input
            className={`${classes.input} ${withDollar ? classes.inputWithDollar : ''}`}
            type="text"
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  inputWrapper: {
    width: '297px',
  },
  title: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
  },
  input: {
    marginTop: '8px',
    height: '48px',
    width: '100%',
    flexShrink: 0,
    borderRadius: '9999px',
    background: 'var(--lightest-grey-color)',
    display: 'flex',
    alignItems: 'center',
    padding: '12px 32px',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '24px',
    '&::placeholder': {
      color: 'rgba(36, 37, 39, 0.50)',
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '24px',
    },
  },
  inputWithDollarWrapper: {
    position: 'relative',
    '&:before': {
      content: '"$"',
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: '32px',
      transform: 'translateY(-50%)',
      color: 'rgba(36, 37, 39, 0.50)',
      fontWeight: 400,
      lineHeight: '24px',
    },
  },
  inputWithDollar: {
    padding: '12px 32px 12px 46px',
  },

  '@media (max-width: 576px)': {
    inputWrapper: {
      width: '100%',
    },
    input: {
      width: '100%',
    },
  },
};

export default withStyles(styles)(CustomInput);
