import React from "react";

import { fetchCommentsByPostId } from "@/api/fetchCommentsByPostId";
import { fetchPost } from "@/api/fetchPostById";
import { Comments } from "@/components/Comments";

import { PageWrapper } from "@/components/PageWrapper";

import { PostPageBody } from "@/components/PostPageBody";

import { PostPageHeader } from "@/components/PostPageHeader";

export default async function Post({ params }: { params: { id: string } }) {
  const [post, comments] = await Promise.all([
    fetchPost(params.id),
    fetchCommentsByPostId(params.id),
  ]);

  return (
    <PageWrapper>
      <PostPageHeader title={post.title} body={post.body} />
      <PostPageBody postId={params.id} />
      <Comments comments={comments} />
    </PageWrapper>
  );
}
