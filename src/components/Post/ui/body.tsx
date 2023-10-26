"use client";
import React from "react";

import styles from "./ui.module.css";

import { PostBodyProps } from "@/interfaces/component.interfaces";
import { Category, Tag, Time, Htag, Text, LikeCounter } from "@/ui";

export const PostBody = ({
  category,
  createdAt,
  title,
  description,
}: PostBodyProps) => {
  const [count, setCount] = React.useState(0);

  return (
    <div className={styles.content}>
      <div className={styles.contentTop}>
        <div className={styles.contentTopLeft}>
          <Category children={category} />
          <Tag>·</Tag>
          <Time children={createdAt} />
        </div>
        <LikeCounter
          likeNumber={count}
          onClick={() => setCount((current) => current + 1)}
        />
      </div>
      <Htag tag="h4" children={title} />
      <Text>{description}</Text>
    </div>
  );
};
