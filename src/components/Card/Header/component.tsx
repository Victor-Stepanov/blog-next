import React from "react";

import styles from "./styles.module.css";

interface CardHeaderProps {
  imageSrc: string;
}

export const CardHeader = ({ imageSrc }: CardHeaderProps) => {
  return (
    <header className={styles.header}>
      <img className={styles.image} src={imageSrc} alt="Post image" />
    </header>
  );
};
