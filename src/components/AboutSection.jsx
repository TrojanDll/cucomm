import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';

class AboutSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return <div>AboutSection</div>;
  }
}

const styles = {};

export default withStyles(styles)(AboutSection);
