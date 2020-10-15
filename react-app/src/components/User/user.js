import React from "react";
import propTypes from "prop-types"

function User(props) {
  const {theColor, firstname, image} = props;

  return (
    <div>
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
  image: propTypes.string
};

User.defaultProps = {
  theColor: "blue",
  firstname: "default name",
  image: "some default image"
};

export default User;