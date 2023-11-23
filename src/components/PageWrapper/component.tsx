import React from "react";

import styles from "./pageWrapper.module.css";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <article className={styles.wrapper}>{children}</article>;
};
