import axios from "axios";

const url =
  "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

axios
  .get(url)
  .then((result) => {
    if (result.status !== 200) {
      throw new Error("Request failed!");
    }

    if (result.data) {
      return result.data;
    }
    throw new Error("Data not exist!");
  })
  .then((data) => {
    if (!data.articleList || data.articleList.size == 0) {
      throw new Error("Data not exist!");
    }
    return data.articleList;
  })
  .then((articles) => {
    return articles.map((article, index) => {
      return { title: article.title, rank: index + 1 };
    });
  })
  .then((results) => {
    for (let movieInfo of results) {
      console.log(`[${movieInfo.rank}위] : ${movieInfo.title}`);
    }
  })
  .catch((err) => {
    console.log("AN ERROR HAS OCCURRED! :", err);
  });
