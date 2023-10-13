import styles from "./ui.module.css";

import { CardHeaderProps } from "@/types/component.types";

export const CardHeader = ({ imageSrc }: CardHeaderProps) => {
  return (
    <header className={styles.header}>
      <img className={styles.image} src={imageSrc} alt="Изображение" />
    </header>
  );
};
