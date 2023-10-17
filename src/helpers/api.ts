export abstract class Api {
  static post = {
    posts: this.getUrlPosts(),
  };
  static getUrlPosts() {
    return process.env.NEXT_PUBLIC_DOMAIN + "/posts";
  }

  static getUrlPost(postId: string) {
    return `${process.env.NEXT_PUBLIC_DOMAIN}/posts/${postId}`;
  }

  static getCommentsByPostId(postId: string) {
    return `${process.env.NEXT_PUBLIC_DOMAIN}/comments?postId=${postId}`;
  }
}
