import React from "react";
import propTypes from "prop-types"

function User(props) {
  const {theColor, firstname, image, bootcamp} = props;

  return (
    <div>
      <h2>Welcome to {bootcamp}</h2>
      <h2 style={{ backgroundColor: theColor }}>
        Hello, {firstname}
      </h2>
      <img src={image} width="350" height="350" alt=""/>
    </div>
  );
}

User.propTypes = {
  theColor: propTypes.string,
  firstname: propTypes.string,
  image: propTypes.string,
  bootcamp: propTypes.string
};

User.defaultProps = {
  theColor: "blue",
  firstname: "default name",
  image: "some default image"
};

export default User;