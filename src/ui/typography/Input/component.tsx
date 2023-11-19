import React from "react";

import styles from "./input.module.css";
interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input = ({ ...rest }: InputProps) => {
  return <input className={styles.root} {...rest} />;
};
