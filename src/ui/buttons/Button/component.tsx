import cn from "classnames";
import React from "react";

import styles from "./button.module.css";

import { ButtonProps } from "@/interfaces/button.types";

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button className={cn(styles.root, styles.default)} {...rest}>
      {children}
    </button>
  );
};
