import styles from "./ui.module.css";

import { PostFooterProps } from "@/interfaces/component.interfaces";

import { BaseLink, Time } from "@/ui";

export const PostFooter = ({ readTime }: PostFooterProps) => {
  return (
    <footer className={styles.footer}>
      <Time children={readTime} />
      <BaseLink href="#" children="Читать" arrow="exist" />
    </footer>
  );
};
