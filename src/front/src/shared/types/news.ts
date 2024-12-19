export type NewsAPI = {
  id: number;
  title: string;
  summary?: string;
  publication_date?: string;
  full_content: string;
  main_image: string;
};

export type News = {
  id: number;
  title: string;
  summary?: string;
  publicationDate?: Date;
  fullContent: string;
  mainImage: string;
};
