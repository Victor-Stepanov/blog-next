import React from "react";

import styles from "./styles.module.css";

import { Time } from "@/ui";
import { BaseLink } from "@/ui/Link/component";

interface CardFooterProps {
  readTime: string;
}

export const CardFooter = ({ readTime }: CardFooterProps) => {
  return (
    <footer className={styles.footer}>
      <Time children={readTime} />
      <BaseLink href="#" children="Читать" arrow="exist" />
    </footer>
  );
};
