import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        className={styles.input}
        id={name}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
