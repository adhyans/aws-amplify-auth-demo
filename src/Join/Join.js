import React, { useState } from "react";
import { JoinWrapper } from "./styles";
import InputWithLabel from "../common/InputWithLabel";
import Button from "../common/Button";
import { Link } from "@reach/router";
import { Auth } from "@aws-amplify/auth";

Join.propTypes = {};

function Join() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPassChange(event) {
    setPass(event.target.value);
  }

  function join() {
    Auth.signUp({ username: email, password: pass }).then((res) => {
      console.log(res);
    });
  }

  return (
    <JoinWrapper>
      <div className="title">
        <p>Sign up</p>
      </div>
      <div className="form">
        <div className="input-group">
          <InputWithLabel
            label={"Email"}
            onChange={onEmailChange}
            className="input-with-label"
          />
          <InputWithLabel
            label={"Create password"}
            onChange={onPassChange}
            className="input-with-label"
            type="password"
          />
        </div>
        <Button
          className="get-started-button"
          text="Get started now"
          height="4.8rem"
          width="30.7rem"
          onClick={join}
        />
        <div className="signin-text">
          <p>
            Already have an account?{" "}
            <Link to="/login">
              <span className="signin">Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </JoinWrapper>
  );
}

export default Join;
