import cn from "classnames";
import React from "react";

import styles from "./header.module.css";

import { BaseLink, Htag } from "@/ui";
import { GitHub } from "@/ui/icons/github";

export const Header = ({ className }: { className: string }) => {
  return (
    <header className={cn(styles.root, className)}>
      <Htag tag="h1" children=".my_blog" />
      <BaseLink href="#">
        <GitHub />
      </BaseLink>
    </header>
  );
};
