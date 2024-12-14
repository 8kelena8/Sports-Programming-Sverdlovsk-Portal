export type EventAPI = {
  id: number;
  title: string;
  description?: string;
  start_date?: string;
  end_date?: string;
  location?: string;
  category?: number;
  discipline?: number;
  guest?: number;
};

export type Event = {
  id: number;
  title: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  location?: string;
  categoryId?: number;
  disciplineId?: number;
  guestCount?: number;
};
