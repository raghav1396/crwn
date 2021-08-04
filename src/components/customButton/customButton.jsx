import React from "react";
import "./customButton.scss";

export default function customButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
  return (
    <button className={`${isGoogleSignIn ? "google-sign-in" : ""} ${inverted ? "inverted" : ""} custom-button`} {...otherProps}>
      {children}
    </button>
  );
}
