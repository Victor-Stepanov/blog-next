import React from "react";
import { Card } from "../Card";
import styles from "./cardList.module.css";

export const CardList = () => {
  return (
    <section>
      <ul className={styles.cardList}>
        {/* Пока данные с сервера не получаем, такая заглушка */}
        <li className={styles.listItem}>
          <Card />
        </li>
        <li className={styles.listItem}>
          <Card />
        </li>
        <li className={styles.listItem}>
          <Card />
        </li>
        <li className={styles.listItem}>
          <Card />
        </li>
      </ul>
    </section>
  );
};
