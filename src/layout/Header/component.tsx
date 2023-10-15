import cn from "classnames";
import React from "react";

import styles from "./header.module.css";

import { BaseLink, Htag } from "@/ui";
import { GitHub } from "@/ui/icons/github";

interface HeaderProps {
  className: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn(styles.root, className)}>
      <Htag tag="h1" children=".my_blog" />
      <BaseLink href="#">
        <GitHub />
      </BaseLink>
    </header>
  );
};
