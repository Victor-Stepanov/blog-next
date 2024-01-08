import React from "react";

import styles from "./header.module.css";

import { Meta } from "../Meta";
import { postMock } from "../Post/temp/mockExample";

import { Htag, Text } from "@/ui";

export const PostPageHeader = ({
  title,
  body,
}: {
  title: string;
  body: string;
}) => {
  return (
    <header className={styles.root}>
      <Htag tag="h2" children={title} />
      <Meta />
      <img src={postMock.imageSrc} alt="Пост" />
      <Text size="default">{body}</Text>
    </header>
  );
};
