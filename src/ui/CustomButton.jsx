// import { withStyles } from '@material-ui/styles';
// import React from 'react';
// import styled, { css } from 'styled-components';

// const styles = {
//   button: {
//     border: 'none',
//     borderRadius: '9999px',
//     fontWeight: '500',
//     fontSize: '18px',
//     '&:focus': {
//       outline: 'none',
//     },
//     '&:hover': {
//       background: 'var(--hover-color)',
//     },
//   },
//   primary: (props) => ({
//     color: props.color || 'white',
//     background: props.background || 'var(--main-color)',
//     '&:hover': {
//       background: props.backgroundHover || 'var(--hover-color)',
//     },
//   }),
//   outlined: (props) => ({
//     color: props.color || 'var(--main-color)',
//     background: 'transparent',
//     border: `1px solid ${props.borderColor || 'var(--main-color)'}`,
//     '&:hover': {
//       borderColor: props.borderHover || 'var(--hover-color)',
//       color: props.hoverColor || 'var(--hover-color)',
//     },
//   }),
//   fixedSize: (props) => ({
//     padding: 0,
//     width: props.width || '100px',
//     height: props.height || '100px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }),
// };

// // const StyledButton = styled.button`
// //   .button {
// //     border: none;
// //     padding: ${({ padding }) => padding || '12px 32px'};
// //     border-radius: 9999px;
// //     font-weight: ${({ fontWeight }) => fontWeight || '500'};
// //     color: ${({ color }) => color || 'white'};
// //     font-size: ${({ fontSize }) => fontSize || '18px'};
// //   }

// //   &:focus {
// //     outline: none;
// //   }

// //   ${(props) =>
// //     props.primary &&
// //     css`
// //       color: ${props.color || 'white'};
// //       background: ${props.background || 'var(--main-color)'};

// //       &:hover {
// //         background: ${props.backgroundHover || 'var(--hover-color)'};
// //       }
// //     `}

// //   ${(props) =>
// //     props.outlined &&
// //     css`
// //       color: ${props.color || 'var(--main-color)'};
// //       background: transparent;
// //       border: 1px solid ${props.borderColor || 'var(--main-color)'};

// //       &:hover {
// //         border-color: ${props.borderHover || 'var(--hover-color)'};
// //         color: ${props.hoverColor || 'var(--hover-color)'};
// //       }
// //     `}

// //     ${(props) =>
// //     props.fixedSize &&
// //     css`
// //       padding: 0;
// //       width: ${props.width || '100px'};
// //       height: ${props.height || '100px'};
// //       display: flex;
// //       align-items: center;
// //       justify-content: center;
// //     `}
// // `;

// class CustomButton extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const { classes } = this.props;

//     return (
//       <button
//         className={`${classes.button} ${
//           this.props.primary ? classes.primary(this.props) : ''
//         } ${this.props.outlined ? classes.outlined(this.props) : ''} ${
//           this.props.fixedSize ? classes.fixedSize(this.props) : ''
//         }`}
//         {...this.props}
//       >
//         {this.props.children}
//       </button>
//     );
//   }
// }

// export default withStyles(styles)(CustomButton);
