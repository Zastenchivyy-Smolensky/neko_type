// post.js
import Cookies from "js-cookie";
import client from "./client";

// 一覧
export const getList = () => {
  return client.get("/posts");
};

// 詳細
export const getDetail = (id) => {
  return client.get(`/posts/${id}`);
};

// 新規作成
export const createPost = (params) => {
  return client.post("/posts", params, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

// 更新
export const updatePost = (id, params) => {
  return client.patch(`/posts/${id}`, params, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

// 削除
export const deletePost = (id) => {
  return client.delete(`/posts/${id}`, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};
