import cn from "classnames";
import React from "react";

import styles from "./button.module.css";

import { ButtonProps } from "@/types/button.types";

interface ButtonWithSvgProps extends ButtonProps {
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
