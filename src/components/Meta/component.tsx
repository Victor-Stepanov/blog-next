"use client";
import React from "react";

import styles from "./meta.module.css";

import { Category, LikeCounter, Tag, Time } from "@/ui";

export const Meta = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className={styles.root}>
      <Category children="Front-end" />
      <Tag>·</Tag>
      <Time children="1 месяц назад" />
      <Tag>·</Tag>
      <Time children="3 минуты" />
      <Tag>·</Tag>
      <LikeCounter
        likeNumber={count}
        onClick={() => setCount((current) => current + 1)}
      />
    </div>
  );
};
