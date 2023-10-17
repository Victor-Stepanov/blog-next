import React from "react";

import styles from "./cardList.module.css";

import { Card } from "../Card";

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
