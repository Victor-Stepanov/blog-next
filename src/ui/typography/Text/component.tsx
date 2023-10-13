import cn from "classnames";
import React from "react";

import styles from "./text.module.css";

interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "small" | "default" | "large";
}

export const Text = ({ children, size = "small", ...rest }: TextProps) => {
  return (
    <p className={cn(styles.root, size && styles[`p_size_${size}`])} {...rest}>
      {children}
    </p>
  );
};
