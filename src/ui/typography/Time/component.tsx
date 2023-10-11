import React from "react";

import styles from "./styles.module.css";

interface TimeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTimeElement>,
    HTMLTimeElement
  > {}

export const Time = ({ children, ...rest }: TimeProps) => {
  return (
    <time className={styles.root} {...rest}>
      {children}
    </time>
  );
};
