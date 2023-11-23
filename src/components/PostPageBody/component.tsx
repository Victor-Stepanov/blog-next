import React from "react";

import styles from "./body.module.css";

import { Reaction } from "../Reaction";

import { Htag, Text } from "@/ui";

export const PostPageBody = ({ postId }: { postId: string }) => {
  return (
    <section className={styles.root}>
      <Htag tag="h3" children="Что такое грид?" />
      <Text size="default">
        Грид представляет собой пересекающийся набор горизонтальных и
        вертикальных линий, образующих колонки и строки. Элементы могут быть
        помещены в грид в пределах линий этих колонок и строк. Грид имеет
        следующие особенности:
      </Text>
      <Reaction postId={postId} />
    </section>
  );
};
