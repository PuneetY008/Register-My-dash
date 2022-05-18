import React, { useEffect, useState } from "react";
import styles from "./Register.module.scss";
import useInputState from "./hooks/useInputState";
import useToggle from "./hooks/useToggle";
import { Redirect } from "react-router-dom";

export default function Register({ history }) {
  const [email, handleEmailChange, resetEmail] = useInputState("");
  const [password, handlePasswordChange, resetPassword] = useInputState("");
  const [cnfPassword, handleCnfPasswordChange, resetCnfPassword] =
    useInputState("");
  const [name, handleNameChange, resetName] = useInputState("");
  const [phone, handlePhoneChange, resetPhone] = useInputState("");
  const [isTnc, setIsTnc] = useToggle(false);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(email, password, cnfPassword, name, phone));
    setIsSubmit(true);
  };

  const validate = (email, password, cnfPassword, name, phone) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "This is not a valid Email";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be 8-15 characters";
    } else if (password.length > 15) {
      errors.password = "Password can't be greater than 15 characters";
    } else if (!passwordRegex.test(password)) {
      errors.password = "Password must contain 1 letter,1 number and 1 sp char";
    }

    if (!cnfPassword) {
      errors.cnfPassword = "Password must be confirmed";
    } else if (cnfPassword !== password) {
      errors.cnfPassword = "This password doesn't match actual password";
    }

    if (!name) {
      errors.name = "Name is required";
    }

    if (!phone) {
      errors.phone = "Phone is required";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Not a valid Phone Number";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //console.log(email, password, cnfPassword, name, phone, isTnc);
      resetEmail();
      resetPassword();
      resetCnfPassword();
      resetName();
      resetPhone();
      history.replace("/chart");
    }
  }, [formErrors]);

  return (
    <div className={styles.Register}>
      <form className={styles.Register_form} onSubmit={handleSubmit}>
        <h1>Create an Account</h1>
        <div className={styles.Register_form__inputDiv}>
          <label htmlFor="email">Your email address</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <span className="error">{formErrors.email}</span>
        </div>
        <div className={styles.Register_form__inputDiv}>
          <label htmlFor="password">Your Password</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="error">{formErrors.password}</span>
        </div>
        <div className={styles.Register_form__inputDiv}>
          <label htmlFor="cnfPassword">Confirm your password</label>
          <input
            type="text"
            id="cnfPassword"
            name="cnfPassword"
            value={cnfPassword}
            onChange={handleCnfPasswordChange}
          />
          <span className="error">{formErrors.cnfPassword}</span>
        </div>
        <div className={styles.Register_form__inputDiv}>
          <label htmlFor="name">Your fullname</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
          <span className="error">{formErrors.name}</span>
        </div>
        <div className={styles.Register_form__inputDiv}>
          <label htmlFor="phone">Your Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
          <span className="error">{formErrors.phone}</span>
        </div>
        <div className={styles.Register_form__checkboxDiv}>
          <input
            type="checkbox"
            id="tnc"
            name="tnc"
            value={isTnc}
            onChange={setIsTnc}
            hidden
          />
          <label htmlFor="tnc" className={styles.Register_form__customCheckbox}>
            <i className="fa-solid fa-check"></i>
          </label>
          <label htmlFor="tnc">I read and agree Terms and Conditions</label>
        </div>

        <button type="submit" className={styles.Register_form__button}>
          Create Account
        </button>
      </form>
    </div>
  );
}
