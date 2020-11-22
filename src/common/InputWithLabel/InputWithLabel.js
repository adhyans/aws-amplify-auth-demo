import React from "react";
import PropTypes from "prop-types";
import { InputWithLabelWrapper } from "./styles";
import Input from "../Input";

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};

InputWithLabel.defaultProps = {
  type: "text"
};

function InputWithLabel({ label, onChange, type, ...props }) {
  return (
    <InputWithLabelWrapper {...props}>
      <div className="label">
        <p>{label}</p>
      </div>
      <Input onChange={onChange} type={type} className="input" />
    </InputWithLabelWrapper>
  );
}

export default InputWithLabel;
