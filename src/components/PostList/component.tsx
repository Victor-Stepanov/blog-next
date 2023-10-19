import React from "react";

import styles from "./postList.module.css";

import { Post } from "../Post";

import { PostResponse } from "@/interfaces/component.interfaces";

export const PostList = ({ data }: { data: PostResponse[] }) => {
  return (
    <section>
      <ul className={styles.postList}>
        {data.map((post) => (
          <li key={post.id}>
            <Post
              id={post.id}
              gitHubLink="https://github.com/Victor-Stepanov"
              title={post.title}
              body={post.body}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
