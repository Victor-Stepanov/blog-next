import React from "react";

import { CardBody } from "./Body/component";
import { CardFooter } from "./Footer/component";
import { CardHeader } from "./Header/component";
import styles from "./styles.module.css";

import { post } from "./temp/mockExample";

export const Card = () => {
  return (
    <article className={styles.root}>
      <div className={styles.container}>
        <CardHeader imageSrc={post.imageSrc} />
        <CardBody {...post} />
        <CardFooter readTime={post.readTime} />
      </div>
    </article>
  );
};
