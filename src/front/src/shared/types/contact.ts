export type ContactAPI = {
  id: number;
  user?: number;
  name: string;
  email: string;
  subject?: string;
  message: string;
  submission_date: string;
};

export type Contact = {
  id: number;
  userId?: number;
  name: string;
  email: string;
  subject?: string;
  message: string;
  submissionDate: Date;
};
