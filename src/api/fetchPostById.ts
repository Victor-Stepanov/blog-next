import { Api } from "@/helpers/api";
import { checkResponse } from "@/helpers/response-check";
import { PostResponse } from "@/interfaces/component.interfaces";

export async function fetchPost(id: string): Promise<PostResponse> {
  const response = await fetch(Api.getUrlPost(id));
  return checkResponse(response);
}
