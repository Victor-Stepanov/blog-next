import React from "react";

import styles from "./reaction.module.css";

import { PostLikeContainer } from "@/containers/PostLikeContainer";

export const Reaction = ({ postId }: { postId: string }) => {
  return (
    <div className={styles.root}>
      <span className={styles.text}>Понравилось? Жми</span>
      <PostLikeContainer id={postId} />
    </div>
  );
};
