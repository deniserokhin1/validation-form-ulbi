import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./styles/styles.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    switch (targetName) {
      case "email":
        setEmailDirty(true);
        if (!targetValue) {
          setEmailError("Email не может быть пустым");
        }
        break;
      case "password":
        setPasswordDirty(true);
        if (!targetValue) {
          setPasswordError("Пароль не может быть пустым");
        }
        break;
    }
  };

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetType = e.target.type;
    const targetValue = e.target.value;
    switch (targetType) {
      case "text":
        setEmail(targetValue);
        if (!validateEmail(targetValue) && targetValue) {
          setEmailError("Некорректный email");
        } else {
          setEmailError("");
        }
        break;
      case "password":
        setPassword(targetValue);
        if (targetValue.length < 5 && targetValue) {
          setPasswordError("Слишком короткий пароль");
        } else {
          setPasswordError("");
        }
        break;
    }
  };

  return (
    <div className="app">
      <form action="">
        <div className="wrapper">
          <h1 className="title">Регистрация</h1>
          <input
            className="input"
            value={email}
            onChange={(e) => changeInputHandler(e)}
            onBlur={(e) => blurHandler(e)}
            type="text"
            name="email"
            placeholder="Введите электронную почту"
          />
          {emailDirty && emailError && (
            <div style={{ color: "red", paddingLeft: "5px" }}>{emailError}</div>
          )}
          <input
            className="input"
            value={password}
            onChange={(e) => changeInputHandler(e)}
            onBlur={(e) => blurHandler(e)}
            type="password"
            name="password"
            placeholder="Введите пароль"
          />
          {passwordDirty && passwordError && (
            <div style={{ color: "red", paddingLeft: "5px" }}>
              {passwordError}
            </div>
          )}
          <button disabled={!formValid} className="btn" type="submit">
            Ok
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
