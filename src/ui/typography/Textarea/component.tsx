import cn from "classnames";
import React, { ForwardedRef, forwardRef } from "react";

import { FieldError } from "react-hook-form";

import styles from "./textarea.module.css";

interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  error?: FieldError;
}

export const Textarea = forwardRef(
  (
    { error, ...rest }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <div className={styles.wrapper}>
        <textarea
          ref={ref}
          className={cn(styles.textarea, {
            [styles.error]: error,
          })}
          {...rest}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
