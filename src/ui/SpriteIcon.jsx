import React from 'react';
import Icons from './../assets/img/sprite.svg';

class SpriteIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, className } = this.props;
    return (
      <svg className={className}>
        <use href={Icons + '#' + id}></use>
      </svg>
    );
  }
}

export default SpriteIcon;
