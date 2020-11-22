import React from "react";
import PropTypes from "prop-types";
import { InputWrapper } from "./styles";

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.string,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  type: "text",
  height: "4.8rem",
  placeholder: ""
};

function Input({ onChange, height, type, placeholder, ...props }) {
  return (
    <InputWrapper height={height} {...props}>
      <input type={type} onChange={onChange} placeholder={placeholder} />
    </InputWrapper>
  );
}

export default Input;
