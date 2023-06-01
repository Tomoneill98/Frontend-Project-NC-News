import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://northcoders-news-fsce.onrender.com/api",
});

function fetchArticles() {
  return articlesApi.get("/articles").then((res) => {
    return res.data;
  });
}

function fetchTopics() {
  return articlesApi.get("/topics").then((res) => {
    return res.data;
  });
}

function fetchSingleArticle(article_id) {
  return articlesApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
}

function fetchCommentsByArticle(article_id) {
  return articlesApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
}

function postComment(article_id) {
  const postBody = {
    username: "",
    body: "",
  };
  return articlesApi
    .post(`/articles/${article_id}/comments`, postBody)
    .then((res) => {
      console.log(res);
      return res.data;
    });
}

export {
  fetchArticles,
  fetchTopics,
  fetchSingleArticle,
  fetchCommentsByArticle,
};
