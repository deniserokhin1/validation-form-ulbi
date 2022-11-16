import React, { useState } from "react";
import "./styles/styles.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setpasswordError] = useState(
    "Пароль не может быть пустым"
  );

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.name;
    switch (target) {
      case "email":
        return setEmailDirty(true);
      case "password":
        return setPasswordDirty(true);
    }
  };

  return (
    <div className="app">
      <form action="">
        <div className="wrapper">
          <h1>Регистрация</h1>
          <input
            onBlur={(e) => blurHandler(e)}
            type="text"
            name="email"
            placeholder="Введите электронную почту"
          />
          {emailDirty && emailError && (
            <div style={{ color: "red" }}>{emailError}</div>
          )}
          <input
            onBlur={(e) => blurHandler(e)}
            type="password"
            name="password"
            placeholder="Введите пароль"
          />
          {passwordDirty && passwordError && (
            <div style={{ color: "red" }}>{passwordError}</div>
          )}
          <button type="submit">Ok</button>
        </div>
      </form>
    </div>
  );
};

export default App;
