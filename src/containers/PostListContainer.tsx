import React from "react";

import { fetchPosts } from "@/api/fetchPosts";
import { PostList } from "@/components/PostList";
import { Loader } from "@/ui";

export async function PostListContainer() {
  const data = await fetchPosts();
  if (!data.length) {
    return <Loader />;
  }
  return <PostList data={data} />;
}
