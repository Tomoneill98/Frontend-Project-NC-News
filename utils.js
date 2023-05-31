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

export { fetchArticles, fetchTopics, fetchSingleArticle };
