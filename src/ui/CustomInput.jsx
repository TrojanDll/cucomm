import { withStyles } from '@material-ui/styles';
import React from 'react';

const styles = {
  inputWrapper: {
    width: '297px',
  },
  input__title: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
  },
  input__input: {
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
  input__input_withDollarWrapper: {
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
  input__input_withDollar: {
    padding: '12px 32px 12px 46px',
  },
};

class CustomInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    const { title, placeholder, withDollar } = this.props;

    return (
      <div className={classes.inputWrapper}>
        <div className={classes.input__title}>{title}</div>
        <div
          className={`${classes.input__inputWrapper} ${
            withDollar ? classes.input__input_withDollarWrapper : ''
          }`}>
          <input
            className={`${classes.input__input} ${
              withDollar ? classes.input__input_withDollar : ''
            }`}
            type="text"
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(CustomInput);
