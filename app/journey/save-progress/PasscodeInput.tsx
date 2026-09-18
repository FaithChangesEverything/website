"use client";

import { useState } from "react";
import styles from "./save-progress.module.css";

type PasscodeInputProps = {
  name: string;
  label: string;
  autoComplete: "current-password" | "new-password";
};

export function PasscodeInput({ name, label, autoComplete }: PasscodeInputProps) {
  const [visible, setVisible] = useState(false);
  const inputId = `journey-${name}`;

  return (
    <div className={styles.passcodeGroup}>
      <label htmlFor={inputId}>{label}</label>
      <span className={styles.passcodeField}>
        <input
          id={inputId}
          name={name}
          type={visible ? "text" : "password"}
          inputMode="numeric"
          pattern="[0-9]{4}"
          minLength={4}
          maxLength={4}
          required
          autoComplete={autoComplete}
        />
        <button
          className={styles.passcodeToggle}
          type="button"
          aria-label={`${visible ? "Hide" : "Show"} ${label.toLowerCase()}`}
          aria-pressed={visible}
          onClick={() => setVisible((current) => !current)}
        >
          {visible ? "Hide" : "Show"}
        </button>
      </span>
    </div>
  );
}
