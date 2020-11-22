import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { ButtonWrapper } from "./styles";

Button.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  link: "",
  onClick: () => {}
};

function Button({ link, text, height, width, onClick, ...props }) {
  return (
    <ButtonWrapper height={height} width={width} {...props}>
      <Link to={link}>
        <button onClick={onClick}>{text}</button>
      </Link>
    </ButtonWrapper>
  );
}

export default Button;
