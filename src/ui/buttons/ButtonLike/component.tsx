import cn from "classnames";
import React from "react";

import styles from "./buttonLike.module.css";

import { ButtonProps } from "@/types/button.types";
import { ButtonLikeIcon } from "@/ui/icons/buttonLike";

interface ButtonLikeProps extends ButtonProps {
  viewVariant?: "active" | "unactive";
}

export const ButtonLike = ({
  viewVariant = "unactive",
  className,
  ...rest
}: ButtonLikeProps) => {
  return (
    <button
      className={cn(styles.root, className, styles[viewVariant])}
      {...rest}
    >
      <ButtonLikeIcon />
    </button>
  );
};
