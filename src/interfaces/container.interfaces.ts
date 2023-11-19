import { CommentResponse, PostResponse } from "./component.interfaces";

export interface ArticleContainerProps {
  post: PostResponse;
  comments: CommentResponse[];
}
