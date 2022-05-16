import styles from "./App.module.scss";
import image from "./images/img1.jpg";
import Register from "./Register";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.App_leftDiv}>
        <div className={styles.App_leftDiv__selectText}>
          <p>Select a date Range</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            imperdiet bibendum
          </span>
        </div>
      </div>
      <div className={styles.App_rightDiv}>
        <Register />
      </div>
    </div>
  );
}

export default App;
