import React from "react";

import styles from "./likeCounter.module.css";

import { ButtonWithSvg } from "@/ui/buttons/ButtonWithSvg/component";
import { Like } from "@/ui/icons/like";

import { Tag } from "@/ui/typography/Tag/component";

interface LikeCounterProps {
  likeNumber: number;
  onClick: () => void;
}

export const LikeCounter = ({ likeNumber, onClick }: LikeCounterProps) => {
  return (
    <div className={styles.root}>
      <Tag>{likeNumber}</Tag>
      <ButtonWithSvg onClick={onClick} Icon={Like} />
    </div>
  );
};
