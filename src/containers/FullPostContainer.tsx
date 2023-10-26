"use client";

import React from "react";

import { Api } from "@/helpers/api";
import { ButtonLike } from "@/ui";

export const FullPostContainer = () => {
  const [active, setActive] = React.useState(false);
  const [postId, setPostId] = React.useState(0);

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
    setPostId(3);
  }, []);
  return (
    <ButtonLike
      viewVariant={active ? "active" : "unactive"}
      onClick={handleClick}
    />
  );
};
