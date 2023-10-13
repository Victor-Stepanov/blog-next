import React from "react";

import styles from "./card.module.css";

import { post } from "./temp/mockExample";
import { CardHeader, CardBody, CardFooter } from "./ui";

export const Card = () => {
  return (
    <article className={styles.root}>
      <div className={styles.container}>
        <CardHeader imageSrc={post.imageSrc} />
        <CardBody
          title={post.title}
          description={post.description}
          category={post.category}
          createdAt={post.createdAt}
        />
        <CardFooter readTime={post.readTime} />
      </div>
    </article>
  );
};
