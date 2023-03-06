const express = require("express");
const bcrypt = require("bcryptjs");
const app = express();
const jwt = require("jsonwebtoken");
const router = express.Router();
app.use(express.json());
const mongoose = require("mongoose");

const JWT_SEC_KEY = "lsdakjldasnl@123546DASsdaca";

require("../Models/Users/Users");

const User = mongoose.model("Users");

router.post("/signup", async (req, res) => {
  const { f_name, l_name, email, password } = req.body;

  const encrypt_password = await bcrypt.hash(password, 10);
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send({ error: "Already have an account with this email." });
    }
    await User.create({
      f_name,
      l_name,
      email,
      password: encrypt_password,
    });
    res.status(201).json({ success: true, data: req.body });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).then((user) => {
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "User not exist" });
    bcrypt.compare(password, user.password, (err, data) => {
      const token = jwt.sign({}, JWT_SEC_KEY);
      if (err) throw err;
      if (data) {
        return res
          .status(200)
          .json({ success: true, message: "login success", token: token });
      } else {
        return res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }
    });
  });
});

module.exports = router;
