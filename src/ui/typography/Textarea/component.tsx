import React from "react";

import styles from "./textarea.module.css";

interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export const Textarea = ({ ...rest }: TextareaProps) => {
  return <textarea maxLength={50} className={styles.root} {...rest} />;
};
