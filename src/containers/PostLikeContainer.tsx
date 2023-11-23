"use client";

import React from "react";

import { Api } from "@/helpers/api";
import { ButtonLike } from "@/ui";

export const PostLikeContainer = ({ id }: { id: string }) => {
  const [active, setActive] = React.useState(false);
  const [postId, setPostId] = React.useState<string>();

  React.useEffect(() => {
    const updateLikes = async () => {
      if (!postId) {
        return;
      }
      try {
        const response = await fetch(Api.getUrlPost(String(postId)), {
          method: "PATCH",
        });
        if (response.ok) {
          setActive(true);
        }
      } catch (error) {
        setActive(false);
      }
    };
    updateLikes();
  }, [postId]);

  const handleClick = React.useCallback(() => {
    setPostId(id);
  }, [id]);
  return (
    <ButtonLike
      viewVariant={active ? "active" : "unactive"}
      onClick={handleClick}
    />
  );
};
