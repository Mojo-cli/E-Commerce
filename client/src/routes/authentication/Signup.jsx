import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Background from "../../components/Card/auth/Background";
import InputField from "../../components/InputField/InputField";
import "./css/signup.css";
import AuthServices from "../../services/auth.services";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [f_name, setF_name] = useState("");
  const [l_name, setL_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPass, setReEnterPass] = useState("");
  const [pass1Visibility, setPass1Visibility] = useState(false);
  const [pass2Visibility, setPass2Visibility] = useState(false);

  const navigate = useNavigate();

  async function signup(e) {
    let payload = {
      f_name: f_name,
      l_name: l_name,
      email: email,
      password: password,
    };

    const response = await AuthServices.signup(payload).catch((e) =>
      console.warn("error: ", e)
    );
    // console.log(response);
    if (response.success) {
      navigate("/");
    } else {
      console.log("Unable to create user.");
    }
  }

  function validateData() {
    if (f_name === "") {
      alert("First Name is Empty");
    } else if (l_name === "") {
      alert("Last Name is Empty");
    } else if (email === "") {
      alert("Email is Empty");
    } else if (password === "") {
      alert("Password is Empty");
    } else if (reEnterPass === "") {
      alert("Re-enter password");
    } else if (password === reEnterPass) {
      signup();
    } else {
      alert("Please re-enter password same as password.");
    }
  }

  return (
    <div className="signup-container">
      <Background cardStyle="custom-card">
        <InputField
          label={"First Name"}
          onChange={(e) => setF_name(e.target.value)}
        />
        <InputField
          label={"Last Name"}
          onChange={(e) => setL_name(e.target.value)}
        />
        <InputField
          label={"Email"}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label={"Set Password"}
          type={pass1Visibility ? "text" : "password"}
          showIcons={true}
          onChange={(e) => setPassword(e.target.value)}
          visibility={pass1Visibility}
          onIconClick={() => setPass1Visibility(!pass1Visibility)}
        />
        <InputField
          label={"Confirm Password"}
          type={pass2Visibility ? "text" : "password"}
          onChange={(e) => setReEnterPass(e.target.value)}
          visibility={pass2Visibility}
          onIconClick={() => setPass2Visibility(!pass2Visibility)}
          showIcons={true}
        />
        <Button
          title={"Create Account"}
          onClick={validateData}
          buttonStyle={"btn-style"}
        />
      </Background>
    </div>
  );
}
