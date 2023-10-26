import { Api } from "@/helpers/api";
import { checkResponse } from "@/helpers/response-check";
import { PostResponse } from "@/interfaces/component.interfaces";

export async function fetchPosts(limit: number = 6): Promise<PostResponse[]> {
  const response = await fetch(Api.getUrlPosts() + `?_limit=${limit}`);
  return checkResponse(response);
}
