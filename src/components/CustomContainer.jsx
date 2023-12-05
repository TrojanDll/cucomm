import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/styles';

const styles = {
  container: {
    display: 'block',
    position: 'relative',
    margin: '0 auto',
    width: '1280px',
    '@media (max-width: 1200px)': {
      width: '960px',
    },
    '@media (max-width: 992px)': {
      width: '720px',
    },
    '@media (max-width: 768px)': {
      width: '540px',
    },
    '@media (max-width: 576px)': {
      paddingLeft: '30px',
      paddingRight: '30px',
      width: '100%',
    },
  },
};

// const StyledContainer = styled.div`
//   div {
//     display: block;
//     position: relative;
//     margin: 0 auto;
//     width: 1280px;

//     @media (max-width: 1200px) {
//       width: 960px;
//     }

//     @media (max-width: 992px) {
//       width: 720px;
//     }

//     @media (max-width: 768px) {
//       width: 540px;
//     }

//     @media (max-width: 576px) {
//       padding-left: 30px;
//       padding-right: 30px;
//       width: 100%;
//     }
//   }
// `;

class CustomContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return <div className={classes.container} {...this.props}></div>;
  }
}

export default withStyles(styles)(CustomContainer);
