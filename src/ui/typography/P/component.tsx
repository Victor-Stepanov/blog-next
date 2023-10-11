import cn from "classnames";
import React from "react";

import styles from "./p.module.css";

interface PProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "small" | "default" | "large";
}

export const P = ({ children, size = "small", ...rest }: PProps) => {
  return (
    <p className={cn(styles.root, size && styles[`p_size_${size}`])} {...rest}>
      {children}
    </p>
  );
};
