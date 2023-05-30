import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://northcoders-news-fsce.onrender.com/api",
});

function fetchArticles() {
  return articlesApi.get("/articles").then((res) => {
    return res.data;
  });
}

export { fetchArticles };
