import { route } from "./route";

export class Api {
  static getUrlPosts() {
    return `${process.env.NEXT_PUBLIC_DOMAIN}/${route.posts}`;
  }

  static getUrlPost(postId: string) {
    return `${process.env.NEXT_PUBLIC_DOMAIN}/${route.post}/${postId}`;
  }

  static getCommentsByPostId(postId: string) {
    return `${process.env.NEXT_PUBLIC_DOMAIN}/${route.comments}?postId=${postId}`;
  }
}
