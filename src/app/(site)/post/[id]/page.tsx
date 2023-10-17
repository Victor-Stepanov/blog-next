import React from "react";

import { fetchCommentsByPostId } from "@/api/fetchCommentsByPostId";
import { fetchPost } from "@/api/fetchPostById";

export default async function Post({ params }: { params: { id: string } }) {
  const response = Promise.all([
    fetchPost(params.id),
    fetchCommentsByPostId(params.id),
  ]);
  const [post, comments] = await response;
  console.log(post, comments);
  return <div>page</div>;
}
