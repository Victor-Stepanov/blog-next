import React from "react";

import { fetchCommentsByPostId } from "@/api/fetchCommentsByPostId";
import { fetchPost } from "@/api/fetchPostById";
import { Comments } from "@/components/Comments";
import { Meta } from "@/components/Meta";
import { PageWrapper } from "@/components/PageWrapper";

import { postMock } from "@/components/Post/temp/mockExample";
import { Reaction } from "@/components/Reaction";
import { Htag, Text } from "@/ui";

export default async function Post({ params }: { params: { id: string } }) {
  const [post, comments] = await Promise.all([
    fetchPost(params.id),
    fetchCommentsByPostId(params.id),
  ]);

  return (
    <PageWrapper>
      <section>
        <Htag tag="h2" children={post.title} />
        <Meta />
        <img src={postMock.imageSrc} alt="Пост" />
        <Text size="default">{post.body}</Text>
      </section>
      <section>
        <Htag tag="h3" children="Что такое грид?" />
        <Text size="default">
          Грид представляет собой пересекающийся набор горизонтальных и
          вертикальных линий, образующих колонки и строки. Элементы могут быть
          помещены в грид в пределах линий этих колонок и строк. Грид имеет
          следующие особенности:
        </Text>
        <Reaction postId={params.id} />
      </section>
      <Comments comments={comments} />
    </PageWrapper>
  );
}
