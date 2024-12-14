import { Calendar, CalendarAPI } from "../types/calendar";
import { Category, CategoryAPI } from "../types/category";
import { Contact, ContactAPI } from "../types/contact";
import { Discipline, DisciplineAPI } from "../types/discipline";
import { Document, DocumentAPI } from "../types/document";
import { Event, EventAPI } from "../types/event";
import { News, NewsAPI } from "../types/news";
import { Partner, PartnerAPI } from "../types/partner";

const mapPartner = (apiResult: PartnerAPI): Partner => {
  return {
    id: apiResult.id,
    name: apiResult.name,
    logo: apiResult.logo,
    promotionalContent: apiResult.promotional_content,
  };
};

const mapNews = (apiResult: NewsAPI): News => {
  return {
    id: apiResult.id,
    title: apiResult.title,
    summary: apiResult.summary,
    publicationDate: apiResult.publication_date
      ? new Date(apiResult.publication_date)
      : undefined,
    fullContent: apiResult.full_content,
  };
};

const mapEvent = (apiResult: EventAPI): Event => {
  return {
    id: apiResult.id,
    title: apiResult.title,
    description: apiResult.description,
    startDate: apiResult.start_date
      ? new Date(apiResult.start_date)
      : undefined,
    endDate: apiResult.end_date ? new Date(apiResult.end_date) : undefined,
    location: apiResult.location,
    categoryId: apiResult.category,
    disciplineId: apiResult.discipline,
    guestCount: apiResult.guest,
  };
};

const mapDocuments = (apiResult: DocumentAPI): Document => {
  return {
    id: apiResult.id,
    title: apiResult.title,
    category: apiResult.category,
    uploadDate: new Date(apiResult.upload_date),
    fileLink: apiResult.file_link,
  };
};

const mapDiscipline = (apiResult: DisciplineAPI): Discipline => {
  return apiResult;
};

const mapContact = (apiResult: ContactAPI): Contact => {
  return {
    id: apiResult.id,
    userId: apiResult.user,
    name: apiResult.name,
    email: apiResult.email,
    subject: apiResult.subject,
    message: apiResult.message,
    submissionDate: new Date(apiResult.submission_date),
  };
};

const mapCategory = (apiResult: CategoryAPI): Category => {
  return apiResult;
};

const mapCalendar = (apiResult: CalendarAPI): Calendar => {
  return {
    id: apiResult.id,
    eventId: apiResult.event,
    date: new Date(apiResult.date),
    category: apiResult.category,
  };
};

export const apiMapper = {
  mapPartner,
  mapNews,
  mapEvent,
  mapDocuments,
  mapDiscipline,
  mapContact,
  mapCategory,
  mapCalendar,
};
