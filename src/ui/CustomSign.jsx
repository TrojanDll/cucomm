import { withStyles } from '@material-ui/styles';
import React from 'react';
import styled from 'styled-components';

const styles = {
  sign: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '9999px',
    textTransform: 'uppercase',
    fontFamily: 'BarlowCondensed',
    letterSpacing: '1.4px',
    height: '40px',
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--main-color)',
    background: '#ffffff',
    padding: '0 16px',
  },
};

// const StyledCustomSign = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 9999px;
//   text-transform: uppercase;
//   font-family: 'BarlowCondensed';
//   letter-spacing: 1.4px;
//   width: ${({ width }) => width || 'auto'};
//   height: ${({ height }) => height || '40px'};
//   font-size: ${({ fontSize }) => fontSize || '14px'};
//   font-weight: ${({ fontWeight }) => fontWeight || '500'};
//   color: ${({ color }) => color || 'var(--main-color)'};
//   background: ${({ background }) => background || '#ffffff'};
//   padding: ${({ padding }) => padding || '0 16px'};
// `;

class CustomSign extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return <div className={classes.sign} {...this.props}></div>;
  }
}

export default withStyles(styles)(CustomSign);
