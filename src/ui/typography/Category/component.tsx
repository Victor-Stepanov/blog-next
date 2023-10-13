import React from "react";

import styles from "./category.module.css";

interface CategoryProps {
  children: React.ReactNode;
}

export const Category = ({ children }: CategoryProps) => {
  return <span className={styles.root}>{children}</span>;
};
