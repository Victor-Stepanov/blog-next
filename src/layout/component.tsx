import React from "react";

import styles from "./layout.module.css";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      <main className={styles.content}>{children}</main>
    </div>
  );
};
