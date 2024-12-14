import { apiMapper } from "@/shared/lib/mapping";
import { ListAPI } from "@/shared/types/generic";
import { News, NewsAPI } from "@/shared/types/news";

const getAllNews = async () => {
  const response = await fetch(
    new URL("/news-list", process.env.SERVER_API_URL),
    {
      cache: "no-cache",
      // next: {
      //   revalidate: parseInt(process.env.SERVER_FETCH_REVALIDATION_SECONDS!),
      // },
    }
  );
  const json: ListAPI<NewsAPI> = await response.json();
  return json.map((p) => apiMapper.mapNews(p));
};

const getLastNews = async () => {
  const allNews = await getAllNews();

  return allNews
    .sort((a, b) =>
      !a.publicationDate || !b.publicationDate
        ? 0
        : a.publicationDate.getTime() - b.publicationDate.getTime()
    )
    .slice(0, 5);
};

const getNewsById = async (id: News["id"]) => {
  const response = await fetch(
    new URL(`/news-detail/${id}`, process.env.SERVER_API_URL),
    {
      cache: "no-cache",
      // next: {
      //   revalidate: parseInt(process.env.SERVER_FETCH_REVALIDATION_SECONDS!),
      // },
    }
  );
  const json: NewsAPI = await response.json();
  return apiMapper.mapNews(json);
};

const newsController = {
  getAllNews,
  getNewsById,
  getLastNews,
};

export default newsController;
