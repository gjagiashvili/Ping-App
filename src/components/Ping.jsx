import React, { useState } from "react";
import styles from "../modules/Ping.module.scss";
import mainLogo from "../assets/images/logo.svg";
import MainImg from "../assets/images/mainImg.png";

function Ping() {
  const [email, setEmail] = useState("");
  const [errorText, seterrorText] = useState(false);

  function isValidEmail(email) {
    const emailChecker = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailChecker.test(email);
  }

  const inputText = `${styles.emailInput} ${
    errorText ? styles.emailInputerrorText : ""
  }`;

  function submitHandler(event) {
    event.preventDefault();
    if (!isValidEmail(email)) {
      seterrorText(true);
      return;
    }
    seterrorText(false);
    setEmail("");
  }
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.image}>
          <img className={styles.mainLogo} src={mainLogo} />
        </div>
        <h1 className={styles.upperText}>
          We are launching <span className={styles.soonBold}>soon!</span>
        </h1>
        <p className={styles.underText}>Subscribe and get notified.</p>
      </div>
      <form className={styles.inputEmail} onSubmit={submitHandler}>
        <div>
          <input
            onChange={(e) => {
              seterrorText(false);
              setEmail(e.target.value);
            }}
            className={inputText}
            placeholder="Your email..."
            value={email}
            type="email"
          />
          <div className={styles.errorDiv}>
            {errorText && (
              <p className={styles.errorText}>
                Please provide a valid emaill address.
              </p>
            )}
          </div>
        </div>
        <div className={styles.submitDiv}>
          <button className={styles.submitButton} type="submit">
            Notify Me
          </button>
        </div>
      </form>

      <div className={styles.socialMedias}>
        <img className={styles.mainImg} src={MainImg} alt="Main Image" />
        <div className={styles.socialMediaLinks}>
          <div className={styles.facebookIcon}>
            <a href="#" class="fa fa-facebook"></a>
          </div>
          <div
            className={styles.instagramIcon}
            onClick={(e) => {
              e.preventDefault;
            }}
          >
            <a href="#" class="fa fa-instagram"></a>
          </div>
          <div className={styles.twitterIcon}>
            <a
              href="#"
              class="fa fa-twitter"
              onClick={(e) => {
                e.preventDefault;
              }}
            ></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ping;
