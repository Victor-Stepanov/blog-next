"use client";

import React from "react";

import styles from "./styles.module.css";

import { Tag, Htag, P, Time } from "@/ui";
import { LikeCounter } from "@/ui/components/LikeCounter/component";
import { Category } from "@/ui/typography/Category/component";

interface CardBodyProps {
  category: string;
  createdAt: string;
  title: string;
  description: string;
}

export const CardBody = ({
  category,
  createdAt,
  title,
  description,
}: CardBodyProps) => {
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
      <Htag tag="h3" children={title} />
      <P>{description}</P>
    </div>
  );
};
