"use client";

import { useState } from "react";
import { login, signup } from "./actions";

type LoginFormProps = {
  message?: string;
};

export default function LoginForm({ message }: LoginFormProps) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [localMessage, setLocalMessage] = useState("");

  function handleSignup(formData: FormData) {
    if (password !== confirmPassword) {
      setLocalMessage("Passwords do not match.");
      return;
    }

    setLocalMessage("");
    signup(formData);
  }

  function switchMode(newMode: "login" | "signup") {
    setMode(newMode);
    setLocalMessage("");
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
  }

  const labelStyle = {
    fontWeight: 600,
    fontSize: "14px",
    alignSelf: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    boxSizing: "border-box" as const,
    border: "1px solid #b8b8b8",
    borderRadius: "4px",
    fontSize: "16px",
  };

  return (
    <form>
      <h3
        style={{
          margin: "0 0 24px 0",
          textAlign: "center",
          fontFamily: "Georgia, serif",
          fontSize: "20px",
          color: "#173A63",
        }}
      >
        {mode === "login" ? "Welcome Back" : "Create Your Account"}
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "120px 1fr",
          columnGap: "14px",
          rowGap: "14px",
          alignItems: "center",
        }}
      >
        <label htmlFor="email" style={labelStyle}>
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          style={inputStyle}
        />

        <label htmlFor="password" style={labelStyle}>
          Password
        </label>

        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          required
          autoComplete={
            mode === "login" ? "current-password" : "new-password"
          }
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={inputStyle}
        />

        {mode === "signup" && (
          <>
            <label htmlFor="confirmPassword" style={labelStyle}>
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(event.target.value)
              }
              style={inputStyle}
            />
          </>
        )}
      </div>

      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "14px",
          marginLeft: "134px",
          marginBottom: "22px",
          fontSize: "14px",
        }}
      >
        <input
          type="checkbox"
          checked={showPassword}
          onChange={(event) =>
            setShowPassword(event.target.checked)
          }
        />

        {mode === "login" ? "Show password" : "Show passwords"}
      </label>

      {mode === "login" ? (
        <>
          <button
            formAction={login}
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#173A63",
              color: "#ffffff",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>

          <div
            style={{
              marginTop: "24px",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            <p style={{ marginBottom: "8px" }}>
              Don't have an account?
            </p>

            <button
              type="button"
              onClick={() => switchMode("signup")}
              style={{
                border: "none",
                background: "none",
                color: "#173A63",
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Create Account
            </button>
          </div>
        </>
      ) : (
        <>
          <button
            formAction={handleSignup}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #C39A3A",
              borderRadius: "4px",
              backgroundColor: "#ffffff",
              color: "#173A63",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Create Account
          </button>

          <div
            style={{
              marginTop: "24px",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            <p style={{ marginBottom: "8px" }}>
              Already have an account?
            </p>

            <button
              type="button"
              onClick={() => switchMode("login")}
              style={{
                border: "none",
                background: "none",
                color: "#173A63",
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Back to Sign In
            </button>
          </div>
        </>
      )}

      {(localMessage || message) && (
        <p
          style={{
            marginTop: "24px",
            padding: "12px",
            backgroundColor: "#f7f2e8",
            borderRadius: "4px",
            fontSize: "14px",
            lineHeight: 1.5,
          }}
        >
          {localMessage || message}
        </p>
      )}
    </form>
  );
}