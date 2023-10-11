import Link, { LinkProps } from "next/link";
import React from "react";

import styles from "./styles.module.css";

import { ArrowIcon } from "../icons/arrow";

interface BaseLinkProps extends LinkProps {
  arrow: "none" | "exist";
  children: React.ReactNode;
}

export const BaseLink = ({ href, children, arrow = "none" }: BaseLinkProps) => {
  return (
    <Link href={href} className={styles.root}>
      {children}
      {arrow != "none" && (
        <span className={styles.arrow}>
          <ArrowIcon />
        </span>
      )}
    </Link>
  );
};
