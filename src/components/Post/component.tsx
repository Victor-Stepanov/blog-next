"use client";
import React from "react";

import styles from "./post.module.css";

import { postMock } from "./temp/mockExample";
import { PostHeader, PostBody, PostFooter } from "./ui";

import { useGitHubSetter } from "@/context/gitHub";

export const Post = ({
  title,
  body,
  gitHubLink = "#",
}: {
  title: string;
  body: string;
  gitHubLink?: string;
}) => {
  const setterLink = useGitHubSetter();

  React.useEffect(() => {
    setterLink(gitHubLink);
  }, [gitHubLink, setterLink]);

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
