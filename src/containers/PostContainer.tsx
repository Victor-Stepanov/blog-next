"use client";

import React from "react";

import { ButtonLike } from "@/ui";

export const PostContainer = () => {
  const [active, setActive] = React.useState(false);
  const [postId, setPostId] = React.useState<number>(0);

  React.useEffect(() => {
    const updateLikes = async () => {
      if (!postId) {
        return;
      }
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`,
          {
            method: "PATCH",
          }
        );
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
    setPostId(3);
  }, []);
  return (
    <ButtonLike
      viewVariant={active ? "active" : "unactive"}
      onClick={handleClick}
    />
  );
};
