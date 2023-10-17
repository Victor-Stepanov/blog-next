export interface PostProps {
  category: string;
  createdAt: string;
  title: string;
  description: string;
  readTime: string;
}

export interface PostResponse {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export interface PostBodyProps extends Omit<PostProps, "readTime"> {}

export interface PostFooterProps extends Pick<PostProps, "readTime"> {
  postId: string;
}

export interface PostHeaderProps {
  imageSrc: string;
}

export interface CommentResponse {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}
