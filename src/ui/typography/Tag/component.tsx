import React from "react";

import styles from "./tag.module.css";

interface TagProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {}

export const Tag = ({ children, ...rest }: TagProps) => {
  return (
    <span className={styles.root} {...rest}>
      {children}
    </span>
  );
};
