export type DocumentAPI = {
  id: number;
  title: string;
  category: string;
  upload_date: string;
  file_link: string;
};

export type Document = {
  id: number;
  title: string;
  category: string;
  uploadDate: Date;
  fileLink: string;
};
