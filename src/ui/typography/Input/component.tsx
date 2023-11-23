import cn from "classnames";
import React, { ForwardedRef, forwardRef } from "react";

import { FieldError } from "react-hook-form";

import styles from "./input.module.css";
interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: FieldError;
}

export const Input = forwardRef(
  ({ error, ...rest }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className={styles.wrapper}>
        <input
          ref={ref}
          className={cn(styles.input, {
            [styles.error]: error,
          })}
          {...rest}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
