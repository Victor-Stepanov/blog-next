import cn from "classnames";
import React from "react";

import styles from "./button.module.css";

interface ButtonWithSvgProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  Icon: React.ComponentType;
  className?: string;
}

export const ButtonWithSvg = ({
  Icon,
  className,
  ...rest
}: ButtonWithSvgProps) => {
  return (
    <button className={cn(styles.root, className)} {...rest}>
      <Icon />
    </button>
  );
};
