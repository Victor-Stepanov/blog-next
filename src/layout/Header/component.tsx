"use client";
import cn from "classnames";

import styles from "./header.module.css";

import { useGitHub } from "@/context/gitHub";
import { BaseLink, Htag } from "@/ui";
import { GitHub } from "@/ui/icons/github";

export const Header = ({ className }: { className: string }) => {
  const githHubLink = useGitHub();

  return (
    <header className={cn(styles.root, className)}>
      <Htag tag="h1" children=".my_blog" />
      <BaseLink href={githHubLink}>
        <GitHub />
      </BaseLink>
    </header>
  );
};
