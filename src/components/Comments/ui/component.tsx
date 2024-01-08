import React from "react";

import styles from "./comment.module.css";

import { CommentProps } from "@/interfaces/component.interfaces";
import { Htag, Tag, Text } from "@/ui";

export const Comment = ({ name, body, email }: CommentProps) => {
  return (
    <>
      <div className={styles.authorInfo}>
        <Htag tag="h5" children={name} />
        <Tag>·</Tag>
        <Tag>{email}</Tag>
      </div>
      <Text size="default">{body}</Text>
    </>
  );
};
