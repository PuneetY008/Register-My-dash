import React, { useEffect } from "react";
import styles from "./Register.module.scss";
import useInputState from "./hooks/useInputState";
import useToggle from "./hooks/useToggle";

export default function Register() {
  const [email, handleEmailChange, resetEmail] = useInputState("");
  const [password, handlePasswordChange, resetPassword] = useInputState("");
  const [cnfPassword, handleCnfPasswordChange, resetCnfPassword] =
    useInputState("");
  const [name, handleNameChange, resetName] = useInputState("");
  const [phone, handlePhoneChange, resetPhone] = useInputState("");
  const [isTnc, setIsTnc] = useToggle(false);

  return (
    <div className={styles.Register}>
      <form className={styles.Register_form}>
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
            <i class="fa-solid fa-check"></i>
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
