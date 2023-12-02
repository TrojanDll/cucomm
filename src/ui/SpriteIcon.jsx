import React from "react";
import Icons from "./../assets/img/sprite.svg";

const SpriteIcon = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={Icons + "#" + id}></use>
    </svg>
  );
};

export default SpriteIcon;
