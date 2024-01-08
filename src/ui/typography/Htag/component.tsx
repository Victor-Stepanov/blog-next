import React from "react";

import styles from "./htag.module.css";

interface HtagProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5";
  children: React.ReactNode;
}

export const Htag = ({ tag, children }: HtagProps) => {
  switch (tag) {
    case "h1":
      return <h1 className={styles.h1}>{children}</h1>;
    case "h2":
      return <h2 className={styles.h2}>{children}</h2>;
    case "h3":
      return <h3 className={styles.h3}>{children}</h3>;
    case "h4":
      return <h4 className={styles.h4}>{children}</h4>;
    case "h5":
      return <h5 className={styles.h5}>{children}</h5>;
    default:
      return <></>;
  }
};
