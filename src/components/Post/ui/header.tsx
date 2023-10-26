import styles from "./ui.module.css";

import { PostHeaderProps } from "@/interfaces/component.interfaces";

export const PostHeader = ({ imageSrc }: PostHeaderProps) => {
  return (
    <header className={styles.header}>
      <img className={styles.image} src={imageSrc} alt="Изображение" />
    </header>
  );
};
