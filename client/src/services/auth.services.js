const config = require("../config/config");

const HOST = config.host;

// Authentication API's

const login = async (email, password) => {
  const url = `${HOST}/auth/login`;
  return fetch(url, {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application.json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => {
    return res.json();
  });
};

module.exports.login = login;

const signup = async (payload) => {
  const url = `${HOST}/auth/signup`;
  return fetch(url, {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application.json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(payload),
  }).then((res) => {
    return res.json();
  });
};

module.exports.signup = signup;
