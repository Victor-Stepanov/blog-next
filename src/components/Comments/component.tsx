import React from "react";

import styles from "./comments.module.css";

import { Comment } from "./ui";

import { Form } from "../Form";

import { CommentsProps } from "@/interfaces/component.interfaces";
import { Htag } from "@/ui";

export const Comments = ({ comments }: CommentsProps) => {
  return (
    <section className={styles.root}>
      <Htag tag="h3" children="Комментарии" />
      <ul className={styles.commentList}>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment
              id={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
            />
          </li>
        ))}
      </ul>
      <Form />
    </section>
  );
};
