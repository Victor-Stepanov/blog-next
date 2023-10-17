import React from "react";

import styles from "./post.module.css";

import { postMock } from "./temp/mockExample";
import { PostHeader, PostBody, PostFooter } from "./ui";

export const Post = ({ title, body }: { title: string; body: string }) => {
  return (
    <article className={styles.root}>
      <div className={styles.container}>
        <PostHeader imageSrc={postMock.imageSrc} />
        <PostBody
          title={title}
          description={body}
          category={postMock.category}
          createdAt={postMock.createdAt}
        />
        <PostFooter readTime={postMock.readTime} />
      </div>
    </article>
  );
};
