import { Api } from "@/helpers/api";
import { checkResponse } from "@/helpers/response-check";
import { CommentResponse } from "@/interfaces/component.interfaces";

export async function fetchCommentsByPostId(
  postId: string
): Promise<CommentResponse[]> {
  const response = await fetch(Api.getCommentsByPostId(postId));
  return checkResponse(response);
}
