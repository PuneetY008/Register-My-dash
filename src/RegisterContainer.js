import React from "react";
import Register from "./Register";
import styles from "./RegisterContainer.module.scss";

function RegisterContainer({ routeProps }) {
  return (
    <div className={styles.RegisterContainer}>
      <div className={styles.RegisterContainer_leftDiv}>
        <div className={styles.RegisterContainer_leftDiv__selectText}>
          <p>Select a date Range</p>
          <span>
            Create an account to go to the{" "}
            <b>
              <i>Randomized Bar Chart</i>
            </b>{" "}
            Page
          </span>
        </div>
      </div>
      <div className={styles.RegisterContainer_rightDiv}>
        <Register {...routeProps} />
      </div>
    </div>
  );
}

export default RegisterContainer;
