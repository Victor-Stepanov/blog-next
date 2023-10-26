import styles from "./ui.module.css";

import { route } from "@/helpers/route";

import { PostFooterProps } from "@/interfaces/component.interfaces";

import { BaseLink, Time } from "@/ui";

export const PostFooter = ({ readTime, postId }: PostFooterProps) => {
  return (
    <footer className={styles.footer}>
      <Time children={readTime} />
      <BaseLink
        href={`${route.post}/${postId}`}
        children="Читать"
        arrow="exist"
      />
    </footer>
  );
};
