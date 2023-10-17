import React from "react";

import { Header } from "./Header";
import styles from "./layout.module.css";

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
