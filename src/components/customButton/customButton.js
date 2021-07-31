import React from "react";
import "./customButton.scss";

export default function customButton({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps}>
      {children}
    </button>
  );
}
