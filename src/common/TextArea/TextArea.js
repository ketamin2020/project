import React from "react";
import styles from "./TextArea.module.css";
import classNames from "classnames";

const Input = ({
  type,
  error,
  inputClassNames,
  errorMessage,
  label,
  ...props
}) => {
  return (
    <>
      <div className={styles.textField}>
        <textarea
          className={classNames(
            styles.input,
            inputClassNames,
            error && styles.inputError
          )}
          type={type}
          {...props}
          placeholder={label}
        ></textarea>
        <label className={styles.label}>{label}</label>
        {error && <span className={styles.errorMessage}>{errorMessage}</span>}
      </div>
    </>
  );
};

export default Input;
