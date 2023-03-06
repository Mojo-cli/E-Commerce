import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Background from "../../components/Card/auth/Background";
import InputField from "../../components/InputField/InputField";
import NavBar from "../../components/Navbar/NavBar";
import "./css/login.css";
import AuthServices from "../../services/auth.services";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [isInvalidCred, setIsInvalidCred] = useState(false);

  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    const response = await AuthServices.login(email, password).catch((e) => {
      console.log("error", e);
    });

    if (response.success) {
      console.log("Token => ", response.token);
      setIsInvalidCred(false);
      navigate("/home");
    } else {
      setIsInvalidCred(true);
    }
  }

  return (
    <div className="container">
      <NavBar />
      <div className="content-container">
        <div className="content-left-container">
          <Background>
            <InputField
              label={"Email"}
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              label={"Password"}
              type={visibility ? "text" : "password"}
              showIcons={true}
              visibility={visibility}
              onChange={(e) => setpassword(e.target.value)}
              onIconClick={() => setVisibility(!visibility)}
            />

            {isInvalidCred ? (
              <h5>Invalid Credentials. Please enter valid Email or Password</h5>
            ) : null}

            <span>
              Don't have an account? <a href="/signup">Create Account</a>{" "}
            </span>

            <Button title={"Login"} onClick={login} />
          </Background>
        </div>
        <div className="content-right-container">
          <img src={require("../../assets/family.jpg")} alt="" />
          <div>
            <span>Welcome to India's Best Online Market</span>
            <p>
              e-Buy is an all-in-one destination for all of your daily needs.
              Our online store sells apparel, appliances, sporting goods,
              furniture, laptops, and electronics. We provide significant
              discounts on the bulk of our products and a range of convenient
              payment options. We have gained phenomenal success as a
              consequence of our unbelievable daily deals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
