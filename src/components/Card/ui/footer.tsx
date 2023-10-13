import styles from "./ui.module.css";

import { CardFooterProps } from "@/types/component.types";

import { BaseLink, Time } from "@/ui";

export const CardFooter = ({ readTime }: CardFooterProps) => {
  return (
    <footer className={styles.footer}>
      <Time children={readTime} />
      <BaseLink href="#" children="Читать" arrow="exist" />
    </footer>
  );
};
