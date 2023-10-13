import React from "react";

import styles from "./layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.root}>
      <main>{children}</main>
    </div>
  );
};
